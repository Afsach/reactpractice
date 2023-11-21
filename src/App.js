import React, {useState, useEffect} from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';
import './App.css'

const App = () => {
    const [title, setTitle] = useState(null);
    const [id, setId] = useState(null)
    const fetchData = async ()=> {
     const reponse = await fetch("https://jsonplaceholder.typicode.com/todos/4");
        const data = await  reponse.json();
        console.log(data);
        setTitle(data.title);
        setId(data.id)
    }

    useEffect(()=> {
        fetchData()
    },[id])
     
    return (
        <>

        <div>
            <h1>
                title : {title}<br/>
                id : {id}
            </h1>
        </div>
            {/* <Navbar/>
            <Home/>
            <About/>
            <Contact/>
            <Skills/>
            <Work/> */}


        </>
    )
}

export default App;