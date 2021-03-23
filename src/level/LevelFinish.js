import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import nextIcon from "../img/nextIcon.svg";
import ListIcon from "@material-ui/icons/List";
import confetti from "../img/confetti.svg";
import { StoreContext } from "..";
import { observer } from "mobx-react";
const LevelFinish = observer(({ ...props }) => {
  const gameState = useContext(StoreContext);
  const levelFinishStyles = makeStyles((theme) => ({
    wrapperFinish: {
      position: "relative",
      display: "table",
      margin: "3em auto 0",
    },
    card: {
      background: "#8f2fff",
      color: "white",
      borderRadius: "10px",
      display: "table",
    },
    buttons: {
      width: "1em",
      height: "1em",
      fontSize: "2em",
      color: "yellow",
      border: "1px solid yellow",
      padding: ".5em",
      borderRadius: "4px",
      margin: ".5em",
    },
    rating: {
      display: "table",
      margin: "0 auto 0",
    },
    title: {
      padding: ".5em",
    },
    confeti: {
      display: "table",
      margin: "0 auto 0",
      padding: ".2em",
    },
    stars: {
      fontSize: "1.5em",
      display: "inline-block",
      animation: `$starsanim 2s ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes starsanim": {
      "0%": {
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(1.5)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  }));
  const levelFinishStyle = levelFinishStyles();
  const toLevels = () => gameState.goToLevels();
  const toNextLevel = () => gameState.toNextLevel();
  const displayStars = () => {
    let starsList = [];
    for (let index = 0; index < gameState.stars; index++) {
      starsList.push("⭐");
    }
    return starsList;
  };
  return (
    <div className={levelFinishStyle.wrapperFinish}>
      <Card className={levelFinishStyle.card}>
        <div className={levelFinishStyle.confeti}>
          <img src={confetti} width="100px" height="100px" />
        </div>
        <Typography align={"center"} className={levelFinishStyle.title}>
          Поздравляем !!!
        </Typography>
        <div className={levelFinishStyle.rating}>
          {displayStars().map((star) => (
            <span className={levelFinishStyle.stars}>{star}</span>
          ))}
        </div>
        <Grid container justify={"center"}>
          <ListIcon className={levelFinishStyle.buttons} onClick={toLevels} />
          <div onClick={toNextLevel} className={levelFinishStyle.buttons}>
            {" "}
            <img src={nextIcon} />
          </div>
        </Grid>
      </Card>
    </div>
  );
});
export default LevelFinish;
