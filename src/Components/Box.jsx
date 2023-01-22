import React from 'react'
import Input from './Input'
import ItemCard from './ItemCard';
import { nanoid } from 'nanoid'
export default function Box(props){
    /*
    following are the steps which we shall take in order for our todo list to complete .Here we go:
    1)the button should have a onClick button which triggers a function.
    2)there should be a hook which should be called todoElements . An empty array should be assigned to this hook.
    3)If the button is clicked we want to check the input through if else:
    if(input = "") => donot trigger the add to array program because we donot want a an empty element
    else if (input = any element of the array) => if yes then donot add the value to program
    else=> in all other situation go for the below step:
    4)Now whenever the button is clicked , the value in the input should be added to the array .The value should not be added directly but 
    in a method that has an id and the value text key . The content should be stored in the text key . 
    Format of the array element {"id":nanoid(),"text":input.innerHtml}
    5)Below the input jsx component there should be a constant a which has an arrow function that maps through the array we created above 
    and for each array a todoElement component has to be rendered.
    6)As of now this is enough , start working on dark and light mode now.Rememember to add them in the footer
    */

    const[itemArray,setItemArray]=React.useState([]);
    const[inputValue,setInputValue]=React.useState("");

    function inputHandler(event){
        const a = event.target.value;
        setInputValue(a)
    }

    function buttonHandler(){
        inputValue
        &&
        setItemArray(prev=>[
            ...prev,
            {
                "id":nanoid(),
                "text":inputValue
            }
        ])
    }

    function itemClickHandler(){

    }

    const itemCards =itemArray.map(object=>
    {
        const a = object;
    return <ItemCard 
            itemName={object.text} 
            key={object.id} 
            click={itemClickHandler}/>
        }
    )

    return  <div className='box'>
        <div>
        <input 
         className='input'
         name='place'
         placeholder='project..'
         onChange={(event)=>inputHandler(event)}
         ></input>
        <button className='button' onClick={buttonHandler}>Add</button>
        <div className='item_container'>
        {itemCards}
        </div>
    </div>
    </div>
}