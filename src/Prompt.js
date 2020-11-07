import React from "react";
import Card from "@material-ui/core/Card";
import {commonStyles} from "./Styles";
import Button from "@material-ui/core/Button";

const Prompt = (props) => {
    const styles = commonStyles()
    const handleClick=()=>{
        props.state.setState(state=>({...state,isPrompt:false}))
    }

    return <div className={styles.promptContainer}><Card className={styles.promptCard}>
        <span>{props.state.state.prompt}</span>
        <Button className={styles.promptBtn} onClick={handleClick}>Понятно</Button>
    </Card>

    </div>
}
export default Prompt