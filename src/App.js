import './App.css';

import Heading from "./components/heading";
import {useEffect, useState} from "react";



function App() {

    let heading = "heading"

    const [name, setName] = useState("Kavindu");

    const handleClick = () => {
        setName("Imthath")
    }

    useEffect(() => {
        console.log("useEffect executed")
    }, [])

    useEffect(() => {
        console.log("useEffect for name")
    }, [name])

    // useEffect(() => {
    //     return () => {
    //         console.log("ended")
    //     };
    // }, []);


    return (
        <div className="App" style={{ fontSize: "20px"}}>
            <p className="test">
                aaa
            </p>
            <Heading heading={name} handleClick={handleClick}/>
            <hr/>
            <Heading heading={name} handleClick={handleClick}/>
            <hr/>
            <Heading heading={name} handleClick={handleClick}/>
        </div>
    );
}

export default App;
