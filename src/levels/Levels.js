import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { checkCookie, getCookie } from "../store/cookies";
import { commonStyles } from "../styles/Styles";
import datesIcon from "../img/dates.png";
import { makeStyles } from "@material-ui/core";
import { observer } from "mobx-react";
import { GameState } from "../store/mobxstore";
import desertImg from "../img/desert.png";
import { StoreContext } from "..";
const Levels = observer(({ ...props }) => {
  const gamseState = useContext(StoreContext);
  let finished = Number(gamseState.data.finished);
  const [state, setState] = useState(false);
  const styles = commonStyles();
  const LevelList = styled.div`
    max-height: 70vh;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  const renderStars = (level) => {
    if (!gamseState.data.stars) {
      return;
    }
    let text = "";
    for (let index = 0; index < gamseState.data.stars[level]; index++) {
      text += "⭐";
    }
    return text;
  };
  useEffect(() => {
    checkCookie();
    gamseState.goToLevel();
  }, []);

  return (
    <div className={styles.levels}>
      {state ? null : (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <img
        src={desertImg}
        className={"backImg"}
        onLoad={() => setState(true)}
      />
      <div className={styles.levelsDatesSec}>
        <img src={datesIcon} className={styles.levelsDates} />
        <span>{gamseState.data.dates}</span>
      </div>
      <LevelList>
        {props.levels.map((level, index) => (
          <Button
            component={Link}
            to={`/level/${index + 1}`}
            disabled={finished < index}
            className={styles.levelArk}
            style={{
              border: finished < index ? "2px solid grey" : "2px solid #bc8bf5",
            }}
          >
            <div>
              <span className={styles.starsLevels}>{index + 1}</span>
              <div className={styles.starsLevels}>
                <span>{renderStars(index)}</span>
              </div>
            </div>
          </Button>
        ))}
      </LevelList>
    </div>
  );
});

export default Levels;
