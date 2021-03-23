import { observer } from "mobx-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "..";

const BackImage = observer((props) => {
  //const gameState = useContext(StoreContext);
  const [state, setState] = useState({ loader: true });
  console.log(props.back);
  const imgRef = useRef(null);
  const handleLoad = () => {
    console.log("image loaded");
    // gameState.setValue("loader", false);
    setState((state) => ({ ...state, loader: false }));
  };
  const handleError = () => {
    console.log("error");
  };

  useEffect(() => {
    if (props.back !== "") {
      if (imgRef.current !== null) {
        let img = new Image();
        img.addEventListener("load", handleLoad, false);
        img.src = props.back;
        imgRef.current.src = img.src;
      }
    } else {
      setState((state) => ({ ...state, loader: true }));
    }

    // console.log("render");
    // if (Number(gameState.levelId) > 11 && Number(gameState.levelId) % 2 !== 0) {
    //   console.log("old image");
    //   gameState.setValue("loader", false);
    // }
  }, [props.back]);
  // useEffect(() => {
  //   return () => {
  //     console.log("unmount");
  //     setState((state) => ({ ...state, loader: false }));
  //   };
  // }, [props.back]);
  return (
    <React.Fragment>
      {!state.loader ? null : (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}

      <img
        key={props.back}
        className={"backImg"}
        onError={handleError}
        ref={imgRef}
      />
    </React.Fragment>
  );
});
export default BackImage;
