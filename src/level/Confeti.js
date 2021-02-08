import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Confeti = () => {
  const { width, height } = useWindowSize();
  return<div>
  <h5>Поздравляем !!!</h5>
  <h5>Вы прошли игру !!!</h5>
      <Confetti width={width} height={height} />
  </div> 
};
export default Confeti;
