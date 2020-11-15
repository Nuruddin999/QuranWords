import React, {useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import {checkCookie, getCookie} from "./cookies";
import {commonStyles} from "./Styles";

const Levels = ({...props}) => {
    let finished = Number(props.state.data.finished)
   const styles=commonStyles()
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
        <div className={styles.levels}>
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
