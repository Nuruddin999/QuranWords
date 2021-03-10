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
import datesIcon from "../img/dates.png";
import backIcon from "../img/backicon.png";
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
import { StoreContext } from "..";
import { Lines } from "react-preloaders";
const Level = observer(({ ...props }) => {
  const gameState = useContext(StoreContext);
  const styles = commonStyles();
  const [state, setState] = useState({
    margin: "0",
    mouseDown: false,
    backLoaded: false,
    newImage: false,
  });
  console.log(state.backLoaded);
  console.log("level renders");
  const prevWordStyle = makeStyles({
    prevWord: {
      display: "block",
      textAlign: "center",
      fontFamily: "Tajawal",
      margin: gameState.margin,
      padding: ".2em .5em",
      fontSize: "2em",
      transition: "margin 1s",
      background: "blueviolet",
      borderRadius: "20%",
      color: "white",
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
    setState((state) => ({ mouseDown: false }));
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
    if (gameState.linePoints[0] >= 0) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.beginPath();
      ctx.moveTo(
        gameState.points[gameState.linePoints[0]].x + letterWidth / 2,
        gameState.points[gameState.linePoints[0]].y + 50 / 2
      );
      for (let n = 1; n < gameState.linePoints.length; n++) {
        ctx.lineTo(
          gameState.points[gameState.linePoints[n]].x + letterWidth / 2,
          gameState.points[gameState.linePoints[n]].y + 50 / 2
        );
      }
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
  const handleLoad = () => {
    setState((state) => ({ ...state, backLoaded: true }));
  };

  const giveNextLevel = () =>
    gameState.giveNextLevel(Number(props.match.params.id));
  const backToLevels = () => gameState.backToLevel();
  const openWord = () => {
    let data = JSON.parse(getCookie("data"));
    if (data.dates < 20) {
      gameState.openWord(true);
      setTimeout(() => gameState.openWord(false), 1000);
    } else {
      gameState.open();
      setCookie("data", JSON.stringify({ ...data, dates: data.dates - 20 }));
      gameState.compareWords(
        { word: rightWord, rightWord },
        Number(props.match.params.id),
        data
      );
    }
  };
  const useDates = () => gameState.useDates();
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
    return () => {
      setState((state) => ({ ...state, backLoaded: false }));
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
      gameState.spendDates();
      gameState.calcDates();
    }
    return () => setState((state) => ({ ...state, backLoaded: false }));
  }, [gameState.isPromptUsed]);
  useEffect(() => {
    if (!state.newImage) {
      setState((state) => ({ ...state, newImage: true }));
    }
    return () => setState((state) => ({ ...state, newImage: false }));
  }, [gameState.back]);
  const renderPreloader = () => {
    if (!state.backLoaded) {
      if (state.newImage) {
        return (
          <div id="preloader">
            <div id="loader"></div>
          </div>
        );
      }
    }
  };
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
      {renderPreloader()}
      <img src={gameState.back} className={"backImg"} onLoad={handleLoad} />
      {gameState.isFinished ? (
        <LevelFinish
          state={{ state: props.state, setState: props.setState }}
          levels
        />
      ) : (
        <React.Fragment>
          <div className={styles.topIcons}>
            <div className={styles.backIcon} onClick={backToLevels}>
              <img src={backIcon} alt="" />
            </div>
            <div className={styles.datesSec}>
              <div className={styles.datesImg}>
                <img src={datesIcon} />
              </div>
              <span>{gameState.dates}</span>
            </div>
          </div>
          <div id="wContainer">
            <div className={styles.topBar}>
              <Card className={styles.level}>
                <span>уровень</span>
                <span id="levelNum">{props.match.params.id}</span>
              </Card>
              <div className={styles.sqwrapper}>
                {gameState.isWord1Resolved ? (
                  <Card className={prevwordStyle.prevWord}>
                    <span>{rightWord}</span>
                  </Card>
                ) : null}
              </div>
            </div>
          </div>
          <div className="prev-wrap">
            {!gameState.started ? (
              <Preview
                end={{
                  green: gameState.isWord1Resolved,
                  wrong: gameState.isWrong,
                }}
                id="preview"
              >
                <span>{gameState.previewLetter.join("")}</span>
              </Preview>
            ) : null}
          </div>

          {!gameState.isWord1Resolved ? (
            <div className="lContainer">
              {gameState.word.map((letter, index) => (
                <div
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
          <div className={styles.bottomIcons}>
            <div className={styles.iconBloc}>
              <img src={checkIcon} onClick={openWord} />
            </div>
            <div className={styles.iconBloc}>
              <img src={helpIcon} onClick={useDates} />
            </div>
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
