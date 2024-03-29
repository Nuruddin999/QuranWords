import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./main/App";
import { GameState } from "./store/mobxstore";
import { Provider } from "mobx-react";
import { StoreContext } from './store/context';
const StoreProvider = ({ children }) => {
  const gamestate = new GameState();
  return (
    <StoreContext.Provider value={gamestate}>{children}</StoreContext.Provider>
  );
};
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
