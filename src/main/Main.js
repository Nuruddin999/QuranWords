import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const Main = ({ ...props }) => {
    const onClick = () => {
        props.state.setState(state => ({ ...state, toLevels: true }))
    }
    console.log("Main renders")
    return (
        <div className="App">
            <h2 id="complete"><span id="title">Арабские слова</span></h2>
            <a href="/guide">
                <button>Играть</button>
            </a>
            {props.state.state.toLevels ? <Redirect to="/guide" /> : null}
        </div>
    );
}

export default Main;
