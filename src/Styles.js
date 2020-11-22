import { makeStyles } from "@material-ui/core/styles";

export const commonStyles = makeStyles({
    topBar: {
        textAlign: "center"
    },
    level: {
        display: "table",
        margin: "0 auto 0",
        padding: ".5em 1em"
    },
    sqwrapper: {
        margin: ".5em",
        display: "flex",
        justifyContent: "center"
    },
    square: {
        display: "block",
        width: "2em",
        margin: "0 .2em"
    },
    bottomIcons: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        position: "absolute",
        bottom: "15%"
    },
    iconBloc: {
        width: "2em",
        height: "2em",
        zIndex: "4",
        padding: "0.3em .5em",
        background: "#b1b1b1",
        borderRadius: "40%",
        boxShadow: "0px 1px 1px 0px #000",
        "& img": {
            width: "100%"
        }
    },
    prompt: {
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    promptCard: {
        height: "100%", padding: "1em"
    },
    promptBtn: {

        width: "30%",
        marginRight: "1em",
        float: "right",
    },
    topIcons: {
        padding: ".5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    datesSec: {
        display: "flex",
        alignItems: "center", borderRadius: "20%",
        boxShadow: "0px 1px 1px 0px #000",
        background: "#b1b1b1",
        padding: "0.1em .5em",
        color: "white"
    },
    datesImg: {
        width: "2em",
        height: "2em",
        "& img": {
            width: "100%"
        }
    },
    backIcon: {
        width: "2em",
        height: "2em",
        zIndex: "4",
        borderRadius: "40%",
        padding: "0.1em .5em",
        background: "#b1b1b1",
        boxShadow: "0px 1px 1px 0px #000",
        "& img": {
            width: "100%"
        }
    },
    notYourLevel: {
        display: "flex", "& span": {
            display: "block",
            margin: "auto"
        }
    },
    levels: {
        height: "100%",
        background: "white"
    }
})
