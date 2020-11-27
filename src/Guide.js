import React from "react";
import gLetters from "./img/gLetters.png"
import gCombine from "./img/gCombine.png"
import gPrompt from "./img/gPrompt.png"
import { makeStyles } from "@material-ui/core";
import { commonStyles } from "./Styles";
import helpIcon from "./help.svg"
import checkIcon from "./img/check.svg"
import datesIcon from "./dates.png"
const Guide = () => {
    const usestyles = makeStyles({
        guide: {
            height: "100vh",
            width: "100%",
            overflow: "auto",
        },
        img: {
            display: "block",
            width: "300px",
            margin: "0 auto 0"
        },
        btn: {
            display: "inline-block",
        },
        datesBtn: {
            width: "2em"
        }

    })
    const style = commonStyles()
    const styles = usestyles()
    return <div className={styles.guide}>
        <span>Цель игры-отгадывать слова, встречающиеся в одной из сур 30ой части Корана</span>
        <p>На каждом уровне даны буквы</p>
        <span>Среди них спрятано слово, встречающееся в одной из сур 30ой части Корана. Проведите пальцем (или мышью) от одной буквы до другой, чтобы соединять буквы и составить слово</span>
        <img src={gCombine} className={styles.img} />
        <p>В начале каждого уровня у вас появляется подсказка</p>
        <img src={gPrompt} className={styles.img} />
        <span >Вы можете вызвать ее заново, нажав кнопку</span>
        <span className={styles.btn}> <div className={style.iconBloc}><img src={helpIcon} /></div></span>
        <p>Нажав <span className={styles.btn}><div className={style.iconBloc}><img src={checkIcon} /></div></span> вам сразу откроется загаданное слово, но при этом у вас уменьшится количество  фиников <span className={styles.btn}> <div className={styles.datesImg}><img src={datesIcon} className={styles.datesBtn} /></div></span> </p>

    </div>
}
export default Guide