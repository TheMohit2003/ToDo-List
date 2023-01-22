import React from 'react'

export default function Footer(props){
    const[dark,setDark]=React.useState(false);
    function changeMode(){
        setDark(prev=>!prev)
    }
    return <footer className='footer'>
        <img src={dark?'../github-light.png':'../github-light.png'} alt='github'/>
        <img src={dark?'../dark.png':'../light.png'} alt='mode' onClick={changeMode}/>
    </footer>
}