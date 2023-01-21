import React from 'react'


export default function Input(props){
    
    return <div>
        <input className='input' placeholder='project..'></input>
        <button className='button' onClick={props.click}>Add</button>
    </div>
}