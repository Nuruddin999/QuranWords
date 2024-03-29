import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import "../styles/App.css";
import LevelFinish from "./LevelFinish";
import { commonStyles } from "../styles/Styles";
import { Redirect, withRouter } from "react-router-dom";
import helpIcon from "../img/help.svg";
import checkIcon from "../img/check.svg";
import Prompt from "./Prompt";
import { getCookie, setCookie } from "../store/cookies";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { LevelRepo } from "./LevelRepo";
import Confeti from "./Confeti";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { observer } from "mobx-react";
import TopIcons from "./TopIcons";
import BackImage from "./BackImage";
import { StoreContext } from '../store/context';
const Level = observer(({ ...props }) => {
  const gameState = useContext(StoreContext);
  const styles = commonStyles();
  const [state, setState] = useState({
    margin: "0",
    mouseDown: false,
    backLoaded: false,
    newImage: false,
  });

  const prevWordStyle = makeStyles({
    prevWord: {
      display: "table",
      position: "fixed",
      top: "25%",
      width: "40vw",
      height: "10vh",
      textAlign: "center",
      fontFamily: "Tajawal",
      transform: `translateY(${gameState.margin})`,
      // marginTop: gameState.margin,
      padding: ".5em",
      fontSize: "2em",
      transition: "transform .5s ease-in-out;",
      background: "blueviolet",
      borderRadius: "20%",
      color: "white",
      "& span": {
        display: "table-cell",
        verticalAlign: "middle",
      },
    },
  });
  const prevwordStyle = prevWordStyle();
  let repo = new LevelRepo();
  let letters = props.levels[props.match.params.id - 1][0];
  let rightWord = props.levels[props.match.params.id - 1][1][0];
  let nextLevel =
    Number(props.match.params.id) > props.levels.length
      ? Number(props.match.params.id) - 1
      : Number(props.match.params.id) + 1;
  let word = repo.shuffle(letters[0].split(""));
  let points = [];
  let ctx;
  const refCanvas = useRef(null);
  const refL1 = useRef(null);
  const refL2 = useRef(null);
  const refL3 = useRef(null);
  const refL4 = useRef(null);
  const refL5 = useRef(null);
  const refL6 = useRef(null);
  const refL7 = useRef(null);
  const refList = [refL1, refL2, refL3, refL4, refL5, refL6, refL7];
  if (refCanvas.current) {
    refCanvas.current.width = window.innerWidth;
    refCanvas.current.height = window.innerHeight;
    ctx = refCanvas.current.getContext("2d");
    ctx.lineWidth = 9;
    ctx.strokeStyle = "blue";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }

  const letterWidth = window.innerWidth * 0.12;

  const Preview = styled.div`
    display: table;
    box-sizing: border-box;
    height: 5vh;
    padding: 0.2em 1em;
    border-radius: 4px;
    margin: 0 auto 0px;
    color: white;
    background: ${(props) =>
      props.end.green ? "green" : props.end.wrong ? "red" : "grey"};
  `;
  const isInDiv = (coordinats, index) => {
    return gameState.isInDiv(coordinats, index, letterWidth);
  };
  const onTouchStart = (e) => {
    if (gameState.started) {
      let clientX = e.changedTouches[0].clientX;
      let clientY = e.changedTouches[0].clientY;
      for (let index = 0; index < gameState.points.length; index++) {
        if (isInDiv({ x: clientX, y: clientY }, index)) {
          gameState.showLineAndPrevLetter(index);
        }
      }
    }
  };
  const onTouchMove = (e) => {
    if (!gameState.started) {
      let clientX = e.changedTouches[0].clientX;
      let clientY = e.changedTouches[0].clientY;
      for (let index = 0; index < gameState.points.length; index++) {
        if (isInDiv({ x: clientX, y: clientY }, index)) {
          if (gameState.linePoints.indexOf(index) === -1) {
            gameState.showLineAndPrevLetter(index);
          }
        }
      }
      drawLine(clientX, clientY);
    }
  };
  const clearLine = (word) =>
    gameState.clearLine({ word, rightWord }, Number(props.match.params.id));

  const onTouchEnd = (e, mouse) => {
    let prevWord = gameState.previewLetter;
    clearLine(prevWord.join(""));
    gameState.resetWord();
    setState((state) => ({ ...state, mouseDown: false }));
  };
  const mouseDown = (e) => {
    setState((state) => ({ ...state, mouseDown: true }));
    if (gameState.started) {
      let clientX = e.clientX;
      let clientY = e.clientY;
      for (let index = 0; index < gameState.points.length; index++) {
        if (isInDiv({ x: clientX, y: clientY }, index)) {
          gameState.showLineAndPrevLetter(index);
        }
      }
    }
  };
  const mouseMove = (e) => {
    if (state.mouseDown) {
      if (!gameState.started) {
        let clientX = e.clientX;
        let clientY = e.clientY;
        for (let index = 0; index < gameState.points.length; index++) {
          if (isInDiv({ x: clientX, y: clientY }, index)) {
            if (gameState.linePoints.indexOf(index) === -1) {
              gameState.showLineAndPrevLetter(index);
            }
          }
        }
        drawLine(clientX, clientY);
      }
    }
  };
  const mouseUp = (e) => {
    let prevWord = gameState.previewLetter;
    clearLine(prevWord.join(""));
    gameState.resetWord();
    setState((state) => ({ ...state, mouseDown: false }));
  };
  function drawLine(x, y) {
    gameState.drawLine(x, y, ctx, letterWidth);
  }
  // const handleLoad = () => {
  //   setState((state) => ({ ...state, backLoaded: true }));
  // };

  const giveNextLevel = () =>
    gameState.giveNextLevel(Number(props.match.params.id));
  const openWord = () => {
    gameState.spendOnWord(
      { word: rightWord, rightWord },
      Number(props.match.params.id)
    );
  };
  const useDates = () => gameState.spendOnPropmt();
  useEffect(() => {
    if (gameState.word.length === 0) {
      gameState.setValue("word", word);
    }
    gameState.setValue(
      "back",
      props.levels[props.match.params.id - 1][4][
        window.innerWidth > 700 ? "desc" : "mob"
      ]
    );
    // gameState.setValue("levelId", props.match.params.id);
    return () => {
      //  setState((state) => ({ ...state, backLoaded: false }));
      gameState.setValue("word", []);
    };
  }, [props.match.params.id]);
  useEffect(() => {
    if (gameState.refList.length === 0) {
      gameState.setValue("refList", refList);
    }
  }, [gameState.refList]);

  useEffect(() => {
    if (
      Number(props.match.params.id) >
      JSON.parse(getCookie("data")).finished + 1
    ) {
      gameState.setValue("notYourLevel", true);
    } else if (gameState.points.length === 0) {
      let data = JSON.parse(getCookie("data"));
      for (let index = 0; index < gameState.refList.length; index++) {
        if (gameState.refList[index].current) {
          let coordinats = {
            x: gameState.refList[index].current.getBoundingClientRect().x,
            y: gameState.refList[index].current.getBoundingClientRect().y,
          };
          points.push(coordinats);
        }
      }
      gameState.runGame(
        points,
        data.dates,
        props.levels[props.match.params.id - 1][3]
      );
    }
  }, [gameState.points]);

  useEffect(() => {
    if (gameState.isWord1Resolved) {
      if (props.match.params.id == props.levels.length) {
        console.log("game finished");
        gameState.setValue("isGameFinished", true);
        return;
      }
      giveNextLevel();
      setState((state) => ({ ...state, backLoaded: true }));
      setTimeout(() => gameState.finishGame(), 2000);
    } else if (gameState.isWrong) {
      setState((state) => ({ ...state, backLoaded: true }));
      setTimeout(() => gameState.finishWithWrong(), 500);
    }
    return () => gameState.setValue("isOpened", false);
  }, [gameState.isWord1Resolved, gameState.isWrong]);
  useEffect(() => {
    if (gameState.isPromptUsed) {
      gameState.getDates();
    }
    return () => setState((state) => ({ ...state, backLoaded: false }));
  }, [gameState.isPromptUsed]);

  return gameState.notYourLevel ? (
    <div className={styles.notYourLevel}>
      <span>Это не ваш уровень )))</span>
    </div>
  ) : gameState.isGameFinished ? (
    <div className="confeti-wrapper">
      <Confeti />
    </div>
  ) : Number(props.match.params.id) > props.levels.length ? (
    <div>game completed</div>
  ) : (
    <div>
      {/* {renderPreloader()}
      <img src={gameState.back} className={"backImg"} onLoad={handleLoad} /> */}
      <BackImage back={gameState.back} id={props.match.params.id} />
      {gameState.isFinished ? (
        <LevelFinish
          state={{ state: props.state, setState: props.setState }}
          levels
        />
      ) : (
        <React.Fragment>
          {!gameState.isWord1Resolved ? <TopIcons /> : null}
          <div id="wContainer">
            <div className={styles.topBar}>
              <Card className={styles.level}>
                <span>уровень </span>
                <span id="levelNum">{props.match.params.id}</span>
              </Card>
              <div className={styles.sqwrapper}>
                {gameState.isWord1Resolved ? (
                  <div className={prevwordStyle.prevWord}>
                    <span>{rightWord}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="prev-wrap">
            {!gameState.started ? (
              !gameState.isWord1Resolved ? (
                <Preview
                  end={{
                    green: gameState.isWord1Resolved,
                    wrong: gameState.isWrong,
                  }}
                  id="preview"
                >
                  <span>{gameState.previewLetter.join("")}</span>
                </Preview>
              ) : null
            ) : null}
          </div>

          {!gameState.isWord1Resolved ? (
            <div className="lContainer">
              {gameState.word.map((letter, index) => (
                <div
                  key={letter}
                  className={`l ${
                    props.levels[props.match.params.id - 1][2][index]
                  }`}
                  ref={gameState.refList[index]}
                >
                  {letter}
                </div>
              ))}
            </div>
          ) : null}

          <canvas
            id="gameContainer"
            ref={refCanvas}
            onTouchStart={(e) => onTouchStart(e)}
            onTouchMove={(e) => onTouchMove(e)}
            onTouchEnd={onTouchEnd}
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
            onMouseUp={mouseUp}
          ></canvas>
          <div className={"bottomIcons"}>
            {!gameState.isWord1Resolved ? (
              <React.Fragment>
                <div className={styles.iconBloc}>
                  <img src={checkIcon} onClick={openWord} />
                </div>
                <div className={styles.iconBloc}>
                  <img src={helpIcon} onClick={useDates} />
                </div>
              </React.Fragment>
            ) : null}
          </div>
          {gameState.toLevels ? <Redirect to="/levels" /> : null}
          {gameState.toLevel ? <Redirect to={`/level/${nextLevel}`} /> : null}
          <Snackbar open={gameState.noDatesWindow}>
            <Alert severity="error">Недостаточно фиников !</Alert>
          </Snackbar>
        </React.Fragment>
      )}
    </div>
  );
});
export default withRouter(Level);
