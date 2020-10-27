import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Levels = ({ ...props }) => {
    let finished = props.state.data.finished
    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.index < finished ? props.index + 1 === finished ? "orange" : "palevioletred" : "white"}};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
    const LevelList = styled.div`
  display:flex;
  flex-wrap:wrap; 
  `
    const onClick = (index) => {
        if (index > props.state.data.finished) return
        props.setState(state => ({ ...state, toLevel: true, currentLevel: index+1 }))
    }
    return (
        <div id="levelCnt">
            <div id="levelTitle">
                <button>Уровни</button>
            </div>
            <div id="levelBack">
                <button>Назад</button>
            </div>
            <LevelList>
                {props.levels.map((level, index) =>
                    <Button index={index} onClick={() => onClick(index)}>
                        <span class='lt'>Уровень " + (n + 1) </span>
                        <span class='cn'>💰 0</span>
                        <span class='st'></span></Button>
                )}
            </LevelList>
            {props.state.toLevel ? <Redirect to={`/level/${props.state.currentLevel + 1}`} /> : null}
        </div>



    );
}

export default Levels;
