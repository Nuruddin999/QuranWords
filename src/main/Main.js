import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import "../styles/App.css";
import mainBack from "../img/mainlast.jpg";
import { StoreContext } from '../store/context';
const Main = observer(({ ...props }) => {
  const gameState = useContext(StoreContext);
  const [state, setState] = useState(false);
  const reportLoad = () => setState(true);
  console.log("Main renders");
  return (
    <div className="App">
      {state ? null : (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <img src={mainBack} className={"backImg"} onLoad={reportLoad} />
      <h2 id="complete">
        <span id="title">Слова Корана</span>
      </h2>
      <Link to="/guide">
        <button>Играть</button>
      </Link>
      {gameState?.toLevels ? <Redirect to="/guide" /> : null}
    </div>
  );
});

export default Main;
