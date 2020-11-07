import React, {useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import {checkCookie, getCookie} from "./cookies";

const Levels = ({...props}) => {
    let finished = Number(props.state.data.finished)
    console.log(finished)
    //   const Button = styled.button`
    //   /* Adapt the colors based on primary prop */
    //   background: ${props => props.index < finished ? props.index + 1 === finished ? "orange" : "palevioletred" : "white"}};
    //   font-size: 1em;
    //   margin: 1em;
    //   padding: 0.25em 1em;
    //   border: 2px solid palevioletred;
    //   border-radius: 3px;
    // `;
    const LevelList = styled.div`
  display:flex;
  flex-wrap:wrap; 
  `
    useEffect(() => {
        checkCookie()
        let data = JSON.parse(getCookie("data"))
        props.setState(state => ({...state, data, toLevels: false}))
    }, [])

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
                    <Button href={`/level/${index + 1}`} disabled={ finished < index}>
                        <span class='lt'>Уровень " + (n + 1) </span>
                        <span class='cn'>💰 0</span>
                        <span class='st'></span>
                    </Button>
                )}
            </LevelList>
        </div>


    );
}

export default Levels;
