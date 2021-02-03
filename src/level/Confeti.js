import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Confeti = () => {
  const { width, height } = useWindowSize();
  return<div>
  sdfsdfd
      <Confetti width={width} height={height} />;
  </div> 
};
export default Confeti;
