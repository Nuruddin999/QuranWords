import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkCookie, getCookie } from './cookies';
import { Redirect, Route } from 'react-router-dom';
import Levels from './Levels';
import Main from './Main';
import Level from './Level';
import { levels } from './Data';
import Prompt from "./Prompt";
import {commonStyles} from "./Styles";

export default function App() {
  const styles=commonStyles()
  const [state, setState] = useState({
    currentLevel: 1,
    data: {},
    toLevels: false,
    toLevel: false,
    isWord1Resolved: false,
    stars:0,
    dates:0,
    isPromptUsed:false,
    letters: [],
    started: true,
    linePoints: [],
    refList: [],
    points: [],
    previewLetter: [],
    currnetWord: "",
    isWrong:false,
    wrongAttempts:0,
    isFinished:false,
    isPrompt:false,
    notYourLevel:false,
    classes:[]
  })
  return <React.Fragment>
    {state.isPrompt ? <div className={styles.prompt}><Prompt state={{state,setState}}/></div> : null}
    <Route
      path="/"
      exact
      render={prop => <Main state={{ state, setState }} />}
    />
    <Route
      path="/levels"
      render={prop => <Levels levels={levels} state={state} setState={setState} />}
    />
    <Route
      path="/level/:id"
      render={prop => <Level state={state} setState={setState} levels={levels} />}
    />
  </React.Fragment>

}


