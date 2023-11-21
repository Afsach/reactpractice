import React, {useState, useMemo} from 'react'

export const UseMemoPractice = () => {
    const [count, setCount] = useState(5);
    const [multiCount, setMultiCount] = useState(2)

    let CounterAdd= ()=>{
        setCount(count + 1);
        console.log("CounterAdd");
    }
    let counterMultiply= ()=>{
        setMultiCount(multiCount * 2);
        console.log("counterMultiply");
    }

    let memoMultiplyer  = useMemo(()=>{
        console.log("multiCounter");
        return count + 1;
    },[count]) 
        

  return (
    <>
    <h1>UseMemoPractice</h1>
    <span>{memoMultiplyer}</span>
    <button onClick={CounterAdd}> Count : { count}</button>
    <button onClick={counterMultiply}> 2 multiplyer:  {multiCount}</button>
    </>
  )
}