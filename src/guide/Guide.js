import React, { useContext, useEffect } from "react";
import gLetters from "../img/gLetters.png";
import gCombine from "../img/gCombine.png";
import gPrompt from "../img/gPrompt.png";
import { makeStyles } from "@material-ui/core";
import { commonStyles } from "../styles/Styles";
import helpIcon from "../img/help.svg";
import checkIcon from "../img/check.svg";
import datesIcon from "../img/dates.png";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { StoreContext } from '../store/context';
const Guide = observer(() => {
  const gameState = useContext(StoreContext);
  const usestyles = makeStyles({
    guide: {
      width: "100%",
      height: "100%",
      background: "white",
      // "& span": {
      //     display: "inline-block",
      //     padding: ".5em",
      // }
    },
    img: {
      display: "block",
      width: "300px",
      margin: "0 auto 0",
    },
    btn: {
      display: "inline-block",
    },
    datesBtn: {
      width: "2em",
    },
    main: {
      height: "95vh",
      overflow: "auto",
      padding: ".5em"
    },

    bottom: {
      position: "fixed",
      bottom: "5px",
      left: "5%",
      height: "5vh",
      display: "block",
      width: "80%",
      margin: "0 auto 0",
      background: "#bc8bf5",
      textDecoration: "none",
      borderRadius: "10px",
      "& span": {
        display: "block",
        textAlign: "center",
        color: "white",
      },
      width: "90%",
    },
  });
  const style = commonStyles();
  const styles = usestyles();
  useEffect(() => {
    return () => gameState.setValue("backLoaded", false);
  }, []);
  return (
    <div className={styles.guide}>
      <div className={styles.main}>
        <span>
          Цель игры - отгадывать слова, одной из сур 30ой части Корана
        </span>
        <p>На каждом уровне даны буквы</p>
        <span>
          Среди них спрятано слово, встречающееся в одной из сур 30ой части
          Корана. Проведите пальцем (или мышью) от одной буквы до другой, чтобы
          соединять буквы и составить слово
        </span>
        <img src={gCombine} className={styles.img} />
        <span>Вы можете вызвать подсказку, нажав кнопку</span>
        <span className={styles.btn}>
          {" "}
          <div className={style.iconBloc}>
            <img src={helpIcon} />
          </div>
        </span>
        <p>
          Нажав{" "}
          <span className={styles.btn}>
            <div className={style.iconBloc}>
              <img src={checkIcon} />
            </div>
          </span>{" "}
          вам сразу откроется загаданное слово, но при этом у вас уменьшится
          количество фиников{" "}
          <span className={styles.btn}>
            {" "}
            <div className={styles.datesImg}>
              <img src={datesIcon} className={styles.datesBtn} />
            </div>
          </span>{" "}
        </p>
      </div>

      <Link to="/levels" className={styles.bottom}>
        <span>понятно</span>
      </Link>
    </div>
  );
});
export default Guide;
