import './App.css';
import {useState} from "react";

function App() {

    const [name, setName] = useState("Ayesh");
    const [nameEmptyError, setNameEmptyError] = useState(false);

    const handleName = (e) => {

        if (e.target.value.length === 0) {
            setNameEmptyError(true)
            setName(e.target.value)
            return;
        }
        setNameEmptyError(false)
        setName(e.target.value)
    }

    const handleSave = () => {
        console.log(name)
    }

    return (
        <div className="App" style={{fontSize: "20px"}}>
            <p className="test">
                Input Fields
            </p>
            <label>
                Name
            </label>
            <input type="text" value={name} onChange={handleName}/>
            <button onClick={handleSave} disabled={nameEmptyError}> Save</button>
        </div>
    );
}

export default App;
