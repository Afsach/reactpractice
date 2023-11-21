import React, {useState, useEffect} from "react"

export const UseEffectPractice =()=>{
    const [count, setCount] = useState(0);
    const increaseCounter = ()=>{
        setCount(count+1);
    }
    const decreaseCounter = ()=>{
        setCount(count-1);
    }
    useEffect(()=> {
        console.log("useEffect called");
    },[]);
    return (
        <>
        <h1> Code snippetted</h1>
       
       <button onClick={increaseCounter}>increase</button>
       <h2>{count}</h2>
       <button onClick={decreaseCounter}>decrease</button>
        </>
    )
}