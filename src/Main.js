import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const Main = ({ ...props }) => {
    const onClick = () => {
        props.state.setState(state => ({ ...state, toLevels: true }))
    }
    return (
        <div className="App">
            <h2 id="complete"><span id="title">Арабские слова</span></h2>
            <button onClick={onClick}>Играть</button>
            {props.state.state.toLevels ? <Redirect to="/guide" /> : null}
        </div>
    );
}

export default Main;
