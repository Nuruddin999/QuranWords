import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import "../styles/App.css";
import { StoreContext } from "..";
import mainBack from "../img/main.jpg";
const Main = observer(({ ...props }) => {
  const gameState = useContext(StoreContext);
  useEffect(() => {
    gameState.setValue("back", mainBack);
  }, []);
  console.log("Main renders");
  return (
    <div className="App">
      <h2 id="complete">
        <span id="title">Арабские слова</span>
      </h2>
      <Link to="/guide">
        <button>Играть</button>
      </Link>
      {gameState.toLevels ? <Redirect to="/guide" /> : null}
    </div>
  );
});

export default Main;
