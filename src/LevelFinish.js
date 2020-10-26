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
    return <Card className={levelFinishStyle.card}>
        <Typography align={"center"}>Поздравляем !!!</Typography>
        <div className={levelFinishStyle.rating}> <Rating value={props.stars} readOnly max={3}/></div>
        <Grid container justify={"center"}>
            <Button className={levelFinishStyle.buttons}>Следующий уровень</Button>
            <Button className={levelFinishStyle.buttons}>Список уровней</Button>
        </Grid>

    </Card>
}
export default LevelFinish