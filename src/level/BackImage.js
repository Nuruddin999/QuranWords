import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "..";

const BackImage = observer((props) => {
  const [state, setState] = useState(false);
  const handleLoad = () => {
    console.log("handle load");
    setState((state) => true);
  };

  useEffect(() => {
    return () => setState((state) => false);
  }, [props.back]);
  return (
    <React.Fragment>
      {state ? null : (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <img src={props.back} className={"backImg"} onLoad={handleLoad} />
    </React.Fragment>
  );
});
export default BackImage;
