import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import "../styles/App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Levels from "../levels/Levels";
import Level from "../level/Level";
import { levels } from "../store/Data";
import Prompt from "../level/Prompt";
import { commonStyles } from "../styles/Styles";
import { makeStyles } from "@material-ui/core/styles";
import Guide from "../guide/Guide";
import { observer } from "mobx-react";
import { gameState } from "../store/mobxstore";
const App = observer(() => {
  console.log("App renders");
  const styles = commonStyles();
  const [state, setState] = useState({
    word: [],
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
    isGameFinished: false,
    isPrompt: false,
    isOpened: false,
    notYourLevel: false,
    classes: [],
    back: "",
    margin: "0",
    prompt: {},
  });
  const refCont = useRef(null);
  const MainComp = lazy(() => import("../main/Main"));
  const GuideComp = lazy(() => import("../guide/Guide"));
  const container = makeStyles({
    mainContainer: {
      zIndex: "-2",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "auto",
    },
  });
  useEffect(() => {
    refCont.current.style.backgroundImage = gameState.back;
  }, [gameState.back]);
  useEffect(() => {
    gameState.setValue("isPrompt",true)
  }, []);
  const containerStyle = container();
  return (
    <div ref={refCont} className={containerStyle.mainContainer}>
      {!gameState.isPrompt ? (
        <div className={styles.prompt}>
          <Prompt />
        </div>
      ) : null}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            path="/"
            exact
            render={(prop) => <MainComp state={{ state, setState }} />}
          />
          <Route
            path="/guide"
            render={(prop) => <GuideComp state={{ state, setState }} />}
          />
          <Route
            path="/levels"
            render={(prop) => (
              <Levels levels={levels} state={state} setState={setState} />
            )}
          />
          <Route
            path="/level/:id"
            render={(prop) => (
              <Level levels={levels} />
            )}
          />
        </Switch>
      </Suspense>
    </div>
  );
});
export default App;
