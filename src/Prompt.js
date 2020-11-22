import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { commonStyles } from "./Styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const Prompt = (props) => {
    const styles = commonStyles()
    const [state, setState] = useState({
        transform: "translate(0,-100%)"
    })
    const usePromptStyle = makeStyles({
        promptContainer: {
            display: "block",
            width: "100%",
            position: "relative",
            transform: state.transform,
            transition: "transform 1s",
            backgroundColor: "#fff",
            "& span": {
                display: "block"
            },
            zIndex: "5",
        },
    })
    let promptStyle = usePromptStyle()
    const handleClick = () => {
        props.state.setState(state => ({ ...state, isPrompt: true }))
    }
    useEffect(() => {
        setState({ transform: "translate(0,100%)" })
    }, [])
    return <div className={promptStyle.promptContainer}><Card className={styles.promptCard}>
        <span>{props.state.state.prompt}</span>
        <Button className={styles.promptBtn} onClick={handleClick}>Понятно</Button>
    </Card>

    </div>
}
export default Prompt