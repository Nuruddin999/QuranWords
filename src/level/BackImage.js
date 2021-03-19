import { observer } from "mobx-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "..";

const BackImage = observer((props) => {
  const gameState = useContext(StoreContext);
  // const [state, setState] = useState({ loader: false });
  console.log(gameState.levelId);
  console.log(gameState.loader);
  const handleLoad = () => {
    console.log("image loaded");
    gameState.setValue("loader", false);
    // setState((state) => ({ ...state, loader: true }));
  };
  const handleError = () => {
    console.log("error");
  };

  useEffect(() => {
    if (Number(gameState.levelId) > 11 && Number(gameState.levelId) % 2 !== 0) {
      console.log("old image");
      gameState.setValue("loader", false);
    }
  }, [gameState.levelId]);
  // useEffect(() => {
  //   return () => {
  //     console.log("unmount");
  //     setState((state) => ({ ...state, loader: false }));
  //   };
  // }, [props.back]);
  return (
    <React.Fragment>
      {!gameState.loader ? null : (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}

      <img
        src={gameState.back}
        key={props.back}
        className={"backImg"}
        onLoad={handleLoad}
        onError={handleError}
      />
    </React.Fragment>
  );
});
export default BackImage;
