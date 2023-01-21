import React from 'react'
import Input from './Input'
import { nanoid } from 'nanoid'
export default function Box(){
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

    const [todoElements,setToDoElements]=React.useState([]);



    function clickHandler(){
        
    }

    return  <div className='box'>
        <div>
        <input className='input' name='place' placeholder='project..'></input>
        <button className='button' onClick={clickHandler}>Add</button>
    </div>
    </div>
}