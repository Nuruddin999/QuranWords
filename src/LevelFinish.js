import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Rating from '@material-ui/lab/Rating';

const LevelFinish = ({...props}) => {
    const levelFinishStyles = makeStyles({
        card: {
            margin: "200px 20px 0"
        },
        buttons: {
            width: "80%"
        },
        rating:{
            margin:"0 auto 0"
        }
    })
    const levelFinishStyle = levelFinishStyles()
    const toLevels=()=>{
        props.state.setState(state=>({...state,toLevels:true, isWord1Resolved: false,
            currentLevel:state.currentLevel+1,
            stars:0,
            letters: [],
            started: true,
            linePoints: [],
            refList: [],
            points: [],
            previewLetter: [],
            currnetWord: "",
            isGreen: false,
            wrongAttempts:0,
            isFinished:false,
            classes:[]}))
    }
    const toNextLevel=()=>{
        props.state.setState(state=>({...state,toLevels:false, isWord1Resolved: false,
            currentLevel:state.currentLevel+1,
            stars:0,
            letters: [],
            started: true,
            linePoints: [],
            refList: [],
            points: [],
            previewLetter: [],
            currnetWord: "",
            isGreen: false,
            wrongAttempts:0,
            isFinished:false,
            classes:[]}))
    }
    return <Card className={levelFinishStyle.card}>
        <Typography align={"center"}>Поздравляем !!!</Typography>
        <div className={levelFinishStyle.rating}> <Rating value={props.state.state.stars} readOnly max={3}/></div>
        <Grid container justify={"center"}>
            <Button className={levelFinishStyle.buttons} onClick={toNextLevel}>Следующий уровень</Button>
            <Button className={levelFinishStyle.buttons} onClick={toLevels}>Список уровней</Button>
        </Grid>

    </Card>
}
export default LevelFinish