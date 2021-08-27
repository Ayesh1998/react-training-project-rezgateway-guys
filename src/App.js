import './App.css';

import Heading from "./components/heading";

function App() {
    return (
        <div className="App" style={{fontStyle: "italic", fontSize: "10px"}}>
            <p className="test">
                aaa
            </p>
            <Heading heading="heading 1"/>
            <hr/>
            <Heading heading="heading 2"/>
            <hr/>
            <Heading heading="heading 3"/>
        </div>
    );
}

export default App;
