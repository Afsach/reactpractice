export const UseStatePractice = ({changeBgColor})=>{

    const changeBackgroundColor = (e)=>{
       const backColor = e.target.innerText;
       changeBgColor(backColor);
    }
    return(
        <>
        <h2>Theme</h2>
        <button onClick={changeBackgroundColor}>Red</button>
        <button onClick={changeBackgroundColor}>blue</button>
        <button onClick={changeBackgroundColor}>teal</button>
        <button onClick={changeBackgroundColor}>pink</button>
        <button onClick={changeBackgroundColor}>yellow</button>
        <button onClick={changeBackgroundColor}>orange</button>
        <button onClick={changeBackgroundColor}>green</button>
        <button onClick={changeBackgroundColor}>seagreen</button>
        <button onClick={changeBackgroundColor}>olive</button>
        <button onClick={changeBackgroundColor}>maroon</button>
        <button onClick={changeBackgroundColor}>lime</button>
        <button onClick={changeBackgroundColor}>skyblue</button>
        <button onClick={changeBackgroundColor}>seagreen</button>
        <button onClick={changeBackgroundColor}>tomato</button>
        <button onClick={changeBackgroundColor}>transparent</button>
        {/* <button onClick={(e)=>{console.log(e.target.innerText)}}>peach</button> */}

        </>
    )
}