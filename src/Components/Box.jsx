import React from 'react'
import Input from './Input'
import ItemCard from './ItemCard';
import { nanoid } from 'nanoid'
export default function Box(props){

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

    // the below function should delete the div which trigerred it 
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