import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { checkCookie, getCookie } from './cookies';
import { Redirect, Route } from 'react-router-dom';
import Levels from './Levels';
import Main from './Main';
import Level from './Level';
import { levels } from './Data';

export default function App() {
  const [state, setState] = useState({
    currentLevel: 1,
    data: {},
    toLevels: false,
    toLevel: false,
    isWord1Resolved: false,
    stars:0,
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
    classes:[]
  })
  useEffect(() => {
    checkCookie()
    let data = JSON.parse(getCookie("data"))
    setState(state => ({ ...state, data }))
  }, [])
  return <React.Fragment>
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


