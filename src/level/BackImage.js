import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "..";

const BackImage = observer((props) => {
  const [state, setState] = useState(true);
  const handleLoad = () => {
    setState((state) => false);
  };
  useEffect(() => {
    setState((state) => true);
  }, [props.back]);
  return (
    <React.Fragment>
      {state ? (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      ) : null}
      <img src={props.back} className={"backImg"} onLoad={handleLoad} />
    </React.Fragment>
  );
});
export default BackImage;
