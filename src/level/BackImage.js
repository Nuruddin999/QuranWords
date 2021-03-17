import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "..";

const BackImage = observer((props) => {
  const [state, setState] = useState({ loader: false });
  console.log(state);
  const handleLoad = () => {
    console.log("image loaded");
    setState((state) => ({ ...state, loader: true }));
  };
  const handleError = () => {
    console.log("error");
  };
  // useEffect(() => {
  //   console.log("use effect");
  //   setState((state) => ({ ...state, loader: true }));
  //   return () => setState((state) => ({ ...state, loader: true }));
  // }, []);
  // useEffect(() => {
  //   return () => {
  //     console.log("unmount");
  //     setState((state) => ({ ...state, loader: false }));
  //   };
  // }, [props.back]);
  return (
    <React.Fragment>
      {state.loader ? null : (
        <div id="preloader">
          <span>Загрузка</span>
        </div>
      )}
      <img
        src={props.back}
        key={props.back}
        className={"backImg"}
        onLoad={handleLoad}
        onError={handleError}
      />
    </React.Fragment>
  );
});
export default BackImage;
