import React, { useContext, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { commonStyles } from "../styles/Styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { observer } from "mobx-react";
import { GameState } from "../store/mobxstore";
import { StoreContext } from '../store/context';
const Prompt = observer((props) => {
  const gameState = useContext(StoreContext);
  const styles = commonStyles();
  const [state, setState] = useState({
    transform: "translate(0,-100%)",
  });
  const usePromptStyle = makeStyles({
    promptContainer: {
      display: "block",
      width: "100%",
      position: "relative",
      transform: state.transform,
      transition: "transform 1s",
      backgroundColor: "#fff",
      zIndex: "5",
    },
    suraWrapper: {
      display: "flex",
      justifyContent: "center",
      marginTop: ".3em",
    },
    sura: {
      borderRadius: "10px",
      border: "1px solid blueviolet",
      padding: ".2em",
      margin: "0 .1em",
      background: "blueviolet",
      color: "white",
    },
  });
  let promptStyle = usePromptStyle();
  const handleClick = () => {
    gameState.setValue("isPrompt", true);
  };
  const displaySuras = () => {
    let { suras } = gameState.prompt;
    let list = [];
    if (suras) {
      return (
        <div className={promptStyle.suraWrapper}>
          {suras.map((el) => (
            <span className={promptStyle.sura}>{el}</span>
          ))}
        </div>
      );
    }
  };
  useEffect(() => {
    setState({ transform: "translate(0,100%)" });
  }, []);
  return (
    <div className={promptStyle.promptContainer}>
      <Card className={styles.promptCard}>
        {gameState.prompt.text !== "" ? (
          <React.Fragment>
            <span>{gameState.prompt.text}</span>
            {displaySuras()}
            <span>{`Слово из ${gameState.prompt.letters} букв`}</span>
          </React.Fragment>
        ) : (
          <span>Думай сам</span>
        )}

        <Button className={styles.promptBtn} onClick={handleClick}>
          Понятно
        </Button>
      </Card>
    </div>
  );
});
export default Prompt;
