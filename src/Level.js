import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import "./App.css";
import LevelFinish from "./LevelFinish";
import {commonStyles} from "./Styles";
import {Redirect} from "react-router-dom";

const Level = ({...props}) => {
    const styles = commonStyles()
    let letters = props.levels[props.state.currentLevel - 1][0]
    let rightWord = props.levels[props.state.currentLevel - 1][1][0]
    let word = letters[0].split("")
    let word1 = props.levels[props.state.currentLevel - 1][1][0].split("")
    let points = []

    let ctx;
    const refCanvas = useRef(null);
    const refL1 = useRef(null)
    const refL2 = useRef(null)
    const refL3 = useRef(null)
    const refL4 = useRef(null)
    const refL5 = useRef(null)
    const refL6 = useRef(null)
    const refL7 = useRef(null)
    const refList = [refL1, refL2, refL3, refL4, refL5, refL6, refL7]
    if (refCanvas.current) {
        refCanvas.current.width = window.innerWidth
        refCanvas.current.height = window.innerHeight
        ctx = refCanvas.current.getContext("2d")
        ctx.lineWidth = 9;
        ctx.strokeStyle = "blue";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
    }

    const letterWidth = window.innerWidth * 0.12

    const Preview = styled.div`
    display:table;
  padding:0.2em 1em;
    border-radius:4px;
    margin:0 auto 100px;
    color:${props => props.green ? "white" : "white"};
background:${props => props.green ? "green" : "white"};
`
    const showLineAndPrevLetter = (state, setState, index) => {
        let linepoints = state.linePoints
        linepoints.push(index);
        let list = state.previewLetter
        list.push(state.letters[index])
        setState(state => ({...state, started: false, linePoints: linepoints, previewLetter: list}))
    }
    const isInDiv = (x, y, state, index) => {
        let clientXInLetter = x >= state.points[index].x && x <= state.points[index].x + letterWidth
        let clientYInLetter = y >= state.points[index].y && y <= state.points[index].y + letterWidth
        return clientXInLetter && clientYInLetter
    }
    const onTouchStart = (e) => {
        if (props.state.started) {
            var touchObject = e.changedTouches[0]
            let clientX = touchObject.clientX
            let clientY = touchObject.clientY
            console.log("start: " + clientX + " " + clientY)
            for (let index = 0; index < props.state.points.length; index++) {
                if (isInDiv(clientX, clientY, props.state, index)) {
                    showLineAndPrevLetter(props.state, props.setState, index)
                }
            }
        }
    }
    const onTouchMove = (e) => {
        if (!props.started) {
            var touchObject = e.changedTouches[0]
            let clientX = touchObject.clientX
            let clientY = touchObject.clientY
            console.log("end: " + clientX + " " + clientY)
            for (let index = 0; index < props.state.points.length; index++) {
                if (isInDiv(clientX, clientY, props.state, index)) {
                    if (props.state.linePoints.indexOf(index) === -1) {
                        showLineAndPrevLetter(props.state, props.setState, index)
                    }
                }
            }
            drawLine(clientX, clientY);
        }
    }
    const giveStars = () => {
        switch (props.state.wrongAttempts) {
            case 0:
                return 3;
                break;
        }
    }
    const clearLine = (word) => {
        if (props.state.linePoints[0] >= 0) {
            if (word === rightWord) {
                props.setState(state => ({...state, stars: giveStars(), isWord1Resolved: true, isGreen: true}))
            }

        }
    }
    const onTouchEnd = (e) => {
        let prevWord = props.state.previewLetter
        clearLine(prevWord.join(""))
        setTimeout(() => props.setState(state => ({
            ...state,
            started: true,
            currnetWord: prevWord.join(""),
            linePoints: [],
            previewLetter: [],
        })), 2000)

    }

    function drawLine(x, y) {
        if (props.state.linePoints[0] >= 0) {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.beginPath();
            ctx.moveTo(props.state.points[props.state.linePoints[0]].x + letterWidth / 2, props.state.points[props.state.linePoints[0]].y + letterWidth / 2);
            for (let n = 1; n < props.state.linePoints.length; n++) {
                ctx.lineTo(props.state.points[props.state.linePoints[n]].x + letterWidth / 2, props.state.points[props.state.linePoints[n]].y + letterWidth / 2);
            }
            ctx.lineTo(x, y);
            ctx.stroke();
            //letterTrans(lt[linePoints[linePoints.length-1]]);
        }
    }

    // useEffect(() => {
    //     if (props.state.classes.length === 0) {
    //         props.setState(state=>({...state,classes:props.}))
    //     }
    // })
    useEffect(() => {
        if (props.state.letters.length === 0) {
            props.setState(state => ({...state, letters: word}))
        }

    }, [props.state.letters])
    useEffect(() => {
        if (props.state.refList.length === 0) {
            props.setState(state => ({...state, refList}))
        }

    }, [props.state.refList])
    useEffect(() => {
        if (props.state.points.length === 0) {
            for (let index = 0; index < props.state.refList.length; index++) {
                if (props.state.refList[index].current) {
                    let coordinats = {
                        x: props.state.refList[index].current.getBoundingClientRect().x,
                        y: props.state.refList[index].current.getBoundingClientRect().y
                    }
                    points.push(coordinats)
                }
            }
            props.setState(state => ({...state, points}))
        }

    }, [props.state.points])
    useEffect(() => {
        if (props.state.isWord1Resolved) {
            setTimeout(() => props.setState(state => ({...state, isFinished: true})), 2000)
        }
        else if (props.state.toLevel){

        }
    }, [props.state.isWord1Resolved,props.state.toLevel])
    return props.state.isFinished ? <LevelFinish state={{state:props.state,setState:props.setState}}/> :
        <div style={{zIndex: "-2", height: "100vh"}}>
            <div className="toLevels" id="toLevels">
                <img src="./back.svg" alt=""/></div>
            <div id="wContainer">
                <div id="topBar">
                    <h3 id="levelDiv"><span id="level">уровень <span id="levelNum">1</span></span><span
                        id="coinDiv"><span id="coin">0</span><span id="coinSign">💰</span></span></h3>
                    <div id="wcont">
                        {props.state.isWord1Resolved ?
                            <span className={styles.prevWord}>{word1}</span> : word1.map(letter =>
                                <div className="wl"></div>)}
                    </div>
                </div>
            </div>
            <Preview green={props.state.isGreen} id="preview">{props.state.previewLetter.map(prevLetter => <span
                id="previewTxt" className={styles.green}>{prevLetter}</span>)}</Preview>
            <div className="lContainer">

                <div className="preview"><span></span></div>
                {word.map((letter, index) => <div className={`l ${props.levels[props.state.currentLevel - 1][2][index]}`}
                                                  ref={props.state.refList[index]}>{letter}</div>)}
            </div>
            <canvas id="gameContainer" ref={refCanvas} onTouchStart={(e) => onTouchStart(e)}
                    onTouchMove={(e) => onTouchMove(e)} onTouchEnd={onTouchEnd}></canvas>
            {props.state.toLevels ? <Redirect to="/levels" /> : null}
            {props.state.toLevel ? <Redirect to={`/level/${props.state.currentLevel + 1}`} /> : null}
        </div>

}

export default Level;
