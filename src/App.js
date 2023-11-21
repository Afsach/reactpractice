import React, {useState} from 'react';
import './style.css';
// import  {UseEffectPractice}  from './Components/UseEffectPractice';
import  {UseStatePractice}  from './Components/UseStatePractice';
import {UseMemoPractice} from './Components/UseMemoPractice';
import { UseRefPractice } from './Components/UseRefPractice';


const App = () => {
    let [bgColor, setBgColor] = useState('transparent');
     document.body.style.backgroundColor = bgColor;

    const changeBgColor = (color)=>{
      bgColor= color;
       setBgColor(color) 
     }

    return (
        <>
        {/* <UseEffectPractice/> */}
        <UseStatePractice changeBgColor={changeBgColor} />
        <UseMemoPractice/>
        <UseRefPractice/>
        </>
    )
}

export default App;