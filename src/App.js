import React, {useState} from 'react';
import './style.css';
import  {UseEffectPractice}  from './Components/UseEffectPractice';
import  {UseStatePractice}  from './Components/UseStatePractice';

const App = () => {
    let [bgColor, setBgColor] = useState('black');
     document.body.style.backgroundColor = bgColor;

     const changeBgColor = (color)=>{
      bgColor= color;
       setBgColor(color) 
     }
    console.log(document.body.style.backgroundColor);

    return (
        <>
        <UseEffectPractice/>
        <UseStatePractice changeBgColor={changeBgColor} />
        </>
    )
}

export default App;