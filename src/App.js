import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkCookie, getCookie } from './cookies';
import { Redirect, Route } from 'react-router-dom';
import Levels from './Levels';
import Main from './Main';
import Level from './Level';
import { levels } from './Data';
import Prompt from "./Prompt";
import { commonStyles } from "./Styles";
import { makeStyles } from "@material-ui/core/styles";
import Guide from './Guide';

export default function App() {
  const styles = commonStyles()
  const [state, setState] = useState({
    currentLevel: 1,
    data: {},
    toLevels: false,
    toLevel: false,
    isWord1Resolved: false,
    stars: 0,
    dates: 0,
    isPromptUsed: false,
    noDatesWindow: false,
    started: true,
    linePoints: [],
    refList: [],
    points: [],
    previewLetter: [],
    currnetWord: "",
    isWrong: false,
    wrongAttempts: 0,
    isFinished: false,
    isPrompt: false,
    notYourLevel: false,
    classes: [],
    back: "",
    margin: "0",
    prompt: {}
  })
  const refCont = useRef(null)
  const container = makeStyles({
    mainContainer: {
      zIndex: "-2", height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "auto"
    },
  })
  useEffect(() => {
    refCont.current.style.backgroundImage = state.back
  }, [state.back])
  useEffect(() => {
    setState(state => ({ ...state, isPrompt: true }))
  }, [])
  const containerStyle = container()
  return <div ref={refCont} className={containerStyle.mainContainer}>
    {!state.isPrompt ? <div className={styles.prompt}><Prompt state={{ state, setState }} /></div> : null}
    <Route
      path="/"
      exact
      render={prop => <Main state={{ state, setState }} />}
    />
    <Route
      path="/guide"
      render={prop => <Guide state={{ state, setState }} />}
    />
    <Route
      path="/levels"
      render={prop => <Levels levels={levels} state={state} setState={setState} />}
    />
    <Route
      path="/level/:id"
      render={prop => <Level state={state} setState={setState} levels={levels} />}
    />
  </div>

}


