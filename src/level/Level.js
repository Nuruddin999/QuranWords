import React, { useEffect, useRef, useState } from "react";
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

const Level = ({ ...props }) => {
  const styles = commonStyles();
  const [state, setState] = useState({
    margin: "0",
    mouseDown: false,
  });
  const prevWordStyle = makeStyles({
    prevWord: {
      display: "block",
      textAlign: "center",
      fontFamily: "Tajawal",
      margin: props.state.margin,
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
  const [isPrompt, setPrompt] = useState(false);
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
    padding: 0.2em 1em;
    border-radius: 4px;
    margin: 0 auto 50px;
    color: white;
    background: ${(props) =>
      props.end.green ? "green" : props.end.wrong ? "red" : "grey"};
  `;
  const showLineAndPrevLetter = (state, word, index) => {
    repo.showLineAndPrevLetter(state, word, index);
  };
  const isInDiv = (coordinats, state, index) => {
    return repo.isInDiv(coordinats, state, index, letterWidth);
  };
  const onTouchStart = (e) => {
    if (props.state.started) {
      let clientX = e.changedTouches[0].clientX;
      let clientY = e.changedTouches[0].clientY;
      for (let index = 0; index < props.state.points.length; index++) {
        if (isInDiv({ x: clientX, y: clientY }, props.state, index)) {
          showLineAndPrevLetter(
            { state: props.state, setState: props.setState },
            props.state.word,
            index
          );
        }
      }
    }
  };
  const onTouchMove = (e) => {
    if (!props.started) {
      let clientX = e.changedTouches[0].clientX;
      let clientY = e.changedTouches[0].clientY;
      for (let index = 0; index < props.state.points.length; index++) {
        if (isInDiv({ x: clientX, y: clientY }, props.state, index)) {
          if (props.state.linePoints.indexOf(index) === -1) {
            showLineAndPrevLetter(
              { state: props.state, setState: props.setState },
              props.state.word,
              index
            );
          }
        }
      }
      drawLine(clientX, clientY);
    }
  };
  const clearLine = (word) => {
    repo.clearLine({ word, rightWord }, Number(props.match.params.id), {
      state: props.state,
      setState: props.setState,
    });
  };
  const onTouchEnd = (e, mouse) => {
    let prevWord = props.state.previewLetter;
    clearLine(prevWord.join(""));
    props.setState((state) => ({
      ...state,
      currnetWord: prevWord.join(""),
      linePoints: [],
    }));
    setState((state) => ({ mouseDown: false }));
  };
  const mouseDown = (e) => {
    setState((state) => ({ ...state, mouseDown: true }));
    if (props.state.started) {
      let clientX = e.clientX;
      let clientY = e.clientY;
      for (let index = 0; index < props.state.points.length; index++) {
        if (isInDiv({ x: clientX, y: clientY }, props.state, index)) {
          showLineAndPrevLetter(
            { state: props.state, setState: props.setState },
            props.state.word,
            index
          );
        }
      }
    }
  };
  const mouseMove = (e) => {
    if (state.mouseDown) {
      if (!props.started) {
        let clientX = e.clientX;
        let clientY = e.clientY;
        for (let index = 0; index < props.state.points.length; index++) {
          if (isInDiv({ x: clientX, y: clientY }, props.state, index)) {
            if (props.state.linePoints.indexOf(index) === -1) {
              showLineAndPrevLetter(
                { state: props.state, setState: props.setState },
                props.state.word,
                index
              );
            }
          }
        }
        drawLine(clientX, clientY);
      }
    }
  };
  const mouseUp = (e) => {
    let prevWord = props.state.previewLetter;
    clearLine(prevWord.join(""));
    props.setState((state) => ({
      ...state,
      currnetWord: prevWord.join(""),
      linePoints: [],
    }));
    setState((state) => ({ ...state, mouseDown: false }));
  };
  function drawLine(x, y) {
    if (props.state.linePoints[0] >= 0) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.beginPath();
      ctx.moveTo(
        props.state.points[props.state.linePoints[0]].x + letterWidth / 2,
        props.state.points[props.state.linePoints[0]].y + 50 / 2
      );
      for (let n = 1; n < props.state.linePoints.length; n++) {
        ctx.lineTo(
          props.state.points[props.state.linePoints[n]].x + letterWidth / 2,
          props.state.points[props.state.linePoints[n]].y + 50 / 2
        );
      }
      ctx.lineTo(x, y);
      ctx.stroke();
      //letterTrans(lt[linePoints[linePoints.length-1]]);
    }
  }

  const giveNextLevel = () =>
    repo.giveNextLevel(props.state, Number(props.match.params.id));
  const backToLevels = () =>
    props.setState((state) => ({ ...state, toLevels: true }));
  const openWord = () => {
    let data = JSON.parse(getCookie("data"));
    if (data.dates < 20) {
      props.setState((state) => ({ ...state, noDatesWindow: true }));
      setTimeout(
        () => props.setState((state) => ({ ...state, noDatesWindow: false })),
        1000
      );
    } else {
      props.setState((state) => ({ ...state, isOpened: true }));
      setCookie("data", JSON.stringify({ ...data, dates: data.dates - 20 }));
      repo.compareWords(
        { word: rightWord, rightWord },
        {
          state: props.state,
          setState: props.setState,
        },
        Number(props.match.params.id),
        data
      );
    }
  };
  const useDates = () => {
    repo.useDates(props.state, props.setState);
  };
  useEffect(() => {
    if (props.state.word.length === 0) {
      props.setState((state) => ({ ...state, word }));
    }
    return () => props.setState((state) => ({ ...state, word: [] }));
  }, [props.match.params.id]);
  useEffect(() => {
    if (props.state.refList.length === 0) {
      props.setState((state) => ({ ...state, refList }));
    }
  }, [props.state.refList]);

  useEffect(() => {
    if (
      Number(props.match.params.id) >
      JSON.parse(getCookie("data")).finished + 1
    ) {
      props.setState((state) => ({ ...state, notYourLevel: true }));
    } else if (props.state.points.length === 0) {
      let data = JSON.parse(getCookie("data"));
      for (let index = 0; index < props.state.refList.length; index++) {
        if (props.state.refList[index].current) {
          let coordinats = {
            x: props.state.refList[index].current.getBoundingClientRect().x,
            y: props.state.refList[index].current.getBoundingClientRect().y,
          };
          points.push(coordinats);
        }
      }
      props.setState((state) => ({
        ...state,
        points,
        isPrompt: true,
        dates: data.dates,
        toLevel: false,
        prompt: props.levels[props.match.params.id - 1][3],
        back: `url(${
          props.levels[props.match.params.id - 1][4][
            window.innerWidth > 700 ? "desc" : "mob"
          ]
        })`,
      }));
    }
  }, [props.state.points]);

  useEffect(() => {
    if (props.state.isWord1Resolved) {
      if (props.match.params.id == props.levels.length) {
        console.log("game finished");
        props.setState((state) => ({
          ...state,
          isGameFinished: true,
        }));
        return;
      }
      giveNextLevel();
      setTimeout(
        () =>
          props.setState((state) => ({
            ...state,
            isFinished: true,
            previewLetter: [],
            started: true,
            toLevels: false,
          })),
        2000
      );
    } else if (props.state.isWrong) {
      setTimeout(
        () =>
          props.setState((state) => ({
            ...state,
            isWrong: false,
            previewLetter: [],
            started: true,
            toLevels: false,
          })),
        500
      );
    }
    return () => props.setState((state) => ({ ...state, isOpened: false }));
  }, [props.state.isWord1Resolved, props.state.isWrong]);
  useEffect(() => {
    if (props.state.isPromptUsed) {
      repo.spendDates();
      props.setState((state) => ({
        ...state,
        dates: state.dates <= 0 ? 0 : state.dates - 10,
      }));
    }
  }, [props.state.isPromptUsed]);

  return props.state.notYourLevel ? (
    <div className={styles.notYourLevel}>
      <span>Это не ваш уровень )))</span>
    </div>
  ) : props.state.isGameFinished ? (
    <div className="confeti-wrapper">
      <Confeti />
    </div>
  ) : Number(props.match.params.id) > props.levels.length ? (
    <div>game completed</div>
  ) : (
    <div>
      {props.state.isFinished ? (
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
              <span>{props.state.dates}</span>
            </div>
          </div>
          <div id="wContainer">
            <div className={styles.topBar}>
              <Card className={styles.level}>
                <span>уровень</span>
                <span id="levelNum">{props.match.params.id}</span>
              </Card>
              <div className={styles.sqwrapper}>
                {props.state.isWord1Resolved ? (
                  <Card className={prevwordStyle.prevWord}>
                    <span>{rightWord}</span>
                  </Card>
                ) : null}
              </div>
            </div>
          </div>
          {!props.state.started ? (
            <Preview
              end={{
                green: props.state.isWord1Resolved,
                wrong: props.state.isWrong,
              }}
              id="preview"
            >
              {props.state.previewLetter.join("")}
            </Preview>
          ) : null}
          {!props.state.isWord1Resolved ? (
            <div className="lContainer">
              {props.state.word.map((letter, index) => (
                <div
                  className={`l ${
                    props.levels[props.match.params.id - 1][2][index]
                  }`}
                  ref={props.state.refList[index]}
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
          {props.state.toLevels ? <Redirect to="/levels" /> : null}
          {props.state.toLevel ? <Redirect to={`/level/${nextLevel}`} /> : null}
          <Snackbar open={props.state.noDatesWindow}>
            <Alert severity="error">This is a success message!</Alert>
          </Snackbar>
        </React.Fragment>
      )}
    </div>
  );
};
export default withRouter(Level);
