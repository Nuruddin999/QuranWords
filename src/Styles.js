import {makeStyles} from "@material-ui/core/styles";

export const commonStyles = makeStyles({
    prevWord: {
        display: "block",
        textAlign: "center",
        green: {
            display: "block",
            textAlign: "center"
        }
    },
    topBar: {
        textAlign: "center"
    },
    iconBloc: {
        width: "2em",
        height: "2em",
        position: "absolute",
        bottom: "1em",
        left: "calc(90% - 2em)",
        zIndex: "4"
    },
    prompt: {
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "5",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex"
    },
    promptContainer: {
        display: "block",
        width: "80%",
        position: "relative",
        margin: "auto",
        backgroundColor: "#fff",
        "& span": {
            display: "block"
        }
    },
    promptCard: {
        height: "100%", padding: "1em"
    },
    promptBtn: {
        width: "30%",
        marginRight: "1em",
        float: "right",
    },
    topIcons:{
        padding:".5em",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    },
    datesSec:{
        display:"flex",
        alignItems:"center"
    },
    datesImg:{
        width:"2em",
        height:"2em",
        "& img":{
            width:"100%"
        }
    },
    backIcon:{
        width:"2em",
        height:"2em",
        "& img":{
            width:"100%"
        }
    },
    notYourLevel:{
        display:"flex","& span":{
            display:"block",
            margin:"auto"
        }
    }
})
