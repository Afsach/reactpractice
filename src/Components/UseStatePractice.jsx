export const UseStatePractice = ({changeBgColor})=>{

    const changeBackgroundColor = (e)=>{
       const backColor = e.target.innerText;
       changeBgColor(backColor);
    }
    return(
        <>
        <h2>Theme BY lifting state up</h2>
        <button style={{color : 'red'}} onClick={changeBackgroundColor}>Red</button>
        <button style={{color : 'blue'}} onClick={changeBackgroundColor}>blue</button>
        <button style={{color : 'teal'}} onClick={changeBackgroundColor}>teal</button>
        <button style={{color : 'pink'}} onClick={changeBackgroundColor}>pink</button>
        <button style={{color : 'yellow'}} onClick={changeBackgroundColor}>yellow</button>
        <button style={{color : 'orange'}} onClick={changeBackgroundColor}>orange</button>
        <button style={{color : 'green'}} onClick={changeBackgroundColor}>green</button>
        <button style={{color : 'green'}} onClick={changeBackgroundColor}>seagreen</button>
        <button style={{color : 'olive'}} onClick={changeBackgroundColor}>olive</button>
        <button style={{color : 'maroon'}} onClick={changeBackgroundColor}>maroon</button>
        <button style={{color : 'lime'}} onClick={changeBackgroundColor}>lime</button>
        <button style={{color : 'skyblue'}} onClick={changeBackgroundColor}>skyblue</button>
        <button style={{color : 'seagreen'}} onClick={changeBackgroundColor}>seagreen</button>
        <button style={{color : 'tomato'}} onClick={changeBackgroundColor}>tomato</button>
        <button style={{color : 'black'}} onClick={changeBackgroundColor}>black</button>
        {/* <button onClick={(e)=>{console.log(e.target.innerText)}}>peach</button> */}

        </>
    )
}