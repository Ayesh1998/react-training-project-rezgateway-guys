import './App.css';

import Heading from "./components/heading";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="App" style={{fontSize: "20px"}}>
                <p className="test">
                    <Link to="/heading">Go to heading Page</Link>
                </p>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/heading/:name/:id">
                        <Heading/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
