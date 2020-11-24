import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { checkCookie, getCookie } from "./cookies";
import { commonStyles } from "./Styles";
import datesIcon from "./dates.png"
import { makeStyles } from '@material-ui/core';
const Levels = ({ ...props }) => {
    let finished = Number(props.state.data.finished)
    const styles = commonStyles()
    const LevelList = styled.div`
    max-height:70vh;
    overflow-y:auto;
  display:flex;
  flex-wrap:wrap; 
  justify-content:center;
  `
    const renderStars = (level) => {
        if (!props.state.data.stars) { return }
        let text = ""
        for (let index = 0; index < props.state.data.stars[level]; index++) {
            text += "⭐"
        }
        return text
    }
    useEffect(() => {
        checkCookie()
        let data = JSON.parse(getCookie("data"))
        props.setState(state => ({ ...state, data, toLevels: false, isPrompt: true }))
    }, [])

    return (
        <div className={styles.levels}>

            <div className={styles.levelsDatesSec}>
                <img src={datesIcon} className={styles.levelsDates} />
                <span>{props.state.data.dates}</span>
            </div>
            <LevelList>
                {props.levels.map((level, index) =>


                    <Button href={`/level/${index + 1}`} disabled={finished < index} className={styles.levelArk} style={{ border: finished < index ? "2px solid grey" : "2px solid #bc8bf5", }}>
                        <div>
                            <span className={styles.starsLevels}>{index + 1}</span>
                            <div className={styles.starsLevels}>
                                <span>{renderStars(index)}</span>
                            </div>
                        </div>
                    </Button>

                )}
            </LevelList>
        </div>


    );
}

export default Levels;
