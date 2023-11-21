import React, { useState} from 'react'

export const UseRefPractice = () => {
    const [name, setName] = useState("React");
    let updateInput = (e)=> {
        setName("React js");
    }
  return (
    <>
    <h1>UseRefPractice</h1>
    <br/>
    <input type="text" value={name} onChange={updateInput} />
    </>
  )
}

