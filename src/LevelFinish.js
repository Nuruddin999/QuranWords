import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Rating from '@material-ui/lab/Rating';
import nextIcon from './img/nextIcon.svg';
import ListIcon from '@material-ui/icons/List';

const LevelFinish = ({ ...props }) => {
    const levelFinishStyles = makeStyles({
        card: {
            margin: "200px 20px 0",
            background: "blueviolet",
            color: "white",
        },
        buttons: {
            width: "1em",
            height: "1em",
            fontSize: "2em",
            color: "yellow",
            border: "1px solid yellow",
            padding: ".5em",
            borderRadius: "4px",
            margin: ".5em"
        },
        rating: {
            display: "table",
            margin: "0 auto 0"
        },
        title: {
            padding: ".5em"
        }
    })
    let initState = {
        stars: 0,
        letters: [],
        started: true,
        linePoints: [],
        isPromptUsed: false,
        refList: [],
        points: [],
        previewLetter: [],
        currnetWord: "",
        isGreen: false,
        wrongAttempts: 0,
        isFinished: false,
        classes: []
    }
    const levelFinishStyle = levelFinishStyles()
    const toLevels = () => {
        props.state.setState(state => ({
            ...state, toLevels: true, isWord1Resolved: false,
            ...initState
        }))
    }
    const toNextLevel = () => {
        props.state.setState(state => ({
            ...state, toLevels: false, toLevel: true, isWord1Resolved: false,
            ...initState
        }))
    }
    return <Card className={levelFinishStyle.card}>
        <Typography align={"center"} className={levelFinishStyle.title}>Поздравляем !!!</Typography>
        <div className={levelFinishStyle.rating}> <Rating value={props.state.state.stars} readOnly max={3} /></div>
        <Grid container justify={"center"}>
            <ListIcon className={levelFinishStyle.buttons} onClick={toLevels} />
            <div onClick={toNextLevel} className={levelFinishStyle.buttons}> <img src={nextIcon} /></div>

        </Grid>

    </Card>
}
export default LevelFinish