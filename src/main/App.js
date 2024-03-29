import React, {
  useEffect,
  useRef,
  useState,
  Suspense,
  lazy,
  useContext,
} from "react";
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
import { GameState } from "../store/mobxstore";
import { createContext } from "react";
import MainComp from "../main/Main";
import GuideComp from "../guide/Guide";
import { StoreContext } from '../store/context';
const App = observer((props) => {
  const gameState = useContext(StoreContext);
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
  const container = makeStyles({
    mainContainer: {
      zIndex: "-2",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "auto",
      // backgroundImage: gameState.back,
    },
  });
  // useEffect(() => {
  //   refCont.current.style.backgroundImage = gamseState.back;
  // }, [gamseState.back]);
  const reportLoad = () => {
    gameState.setValue("backLoaded", true);
  };
  useEffect(() => {
    gameState.setValue("isPrompt", true);
  }, []);
  const containerStyle = container();
  return (
    <div className="mainBox">
      <div ref={refCont} className={containerStyle.mainContainer}>
        {!gameState.isPrompt ? (
          <div className={styles.prompt}>
            <Prompt />
          </div>
        ) : null}
        <Switch>
          <Route path="/" exact render={(prop) => <MainComp />} />
          <Route path="/guide" render={(prop) => <GuideComp />} />
          <Route
            path="/levels"
            render={(prop) => <Levels levels={levels} />}
          />
          <Route
            path="/level/:id"
            render={(prop) => <Level levels={levels} />}
          />
        </Switch>
      </div>
    </div>
  );
});
export default App;
