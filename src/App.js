import './App.css';

import Heading from "./components/heading";
import {useState} from "react";

function App() {

    const [name, setName] = useState("Kavindu");
    const [age, setAge] = useState(26);

    const [listArray, setListArray] = useState([
        {
            "name": "Imthath",
            "age": 26,

        },
        {
            "name": "Kavindu",
            "age": 27
        },
        {
            "name": "Sachini",
            "age": 28
        },

    ]);

    // let name = "Kavindu";

    const handleClick = () => {
        console.log("clicked")
    }

    const handleClickChangeName = () => {
        setName("Imthath")
        // console.log(name)
    }

    const handleClickPassArgument = (name) => {
        console.log(name)
    }
    const handleIncreaseAge = () => {
        let tempAge = age + 1
        setAge(tempAge)
    }
    const handleDecreaseAge = () => {
        let tempAge = age - 1
        setAge(tempAge)
    }

    return (
        <div className="App" style={{fontSize: "30px"}}>

            {
                listArray.map((item, index) => ( <p key={index}>
                        Name : {item.name}
                        Age : {item.age}
                    </p>)
                )
            }


            {/*<p>*/}
            {/*    Name : Kavindu*/}
            {/*    Age : 30*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Name : Sachini*/}
            {/*    Age : 33*/}
            {/*</p>*/}


            {/*<p className="test" onClick={handleClick}>*/}
            {/*    Click me*/}
            {/*</p>*/}

            {/*<p className="test" onClick={() => handleClickPassArgument("Imthath")}>*/}
            {/*    Click me*/}
            {/*</p>*/}

            {/*<p className="test" onClick={(e) => handleClickPassArgument(e)}>*/}
            {/*    Click me*/}
            {/*</p>*/}

            {/*<p className="test" onClick={() => handleClickChangeName()}>*/}
            {/*    {name}*/}
            {/*</p>*/}

            {/*<p className="test">*/}
            {/*    {age}*/}
            {/*</p>*/}
            {/*<p className="test" onClick={() => handleIncreaseAge()}>*/}
            {/*    +*/}
            {/*</p>*/}
            {/*<p className="test" onClick={() => handleClick()}>*/}
            {/*    -*/}
            {/*</p>*/}

        </div>
    );
}

export default App;
