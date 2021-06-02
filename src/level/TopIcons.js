import React, { useContext } from "react";
import { observer } from "mobx-react";
import { commonStyles } from "../styles/Styles";
import datesIcon from "../img/dates.png";
import backIcon from "../img/backicon.png";
import { StoreContext } from '../store/context';
const TopIcons = observer(() => {
  const gameState = useContext(StoreContext);
  const styles = commonStyles();
  const backToLevels = () => gameState.goToLevels();
  return (
    <React.Fragment>
      <div className={styles.topIcons}>
        <div className={styles.backIcon} onClick={backToLevels}>
          <img src={backIcon} alt="" />
        </div>
        <div className={styles.datesSec}>
          <div className={styles.datesImg}>
            <img src={datesIcon} />
          </div>
          <span>{gameState.dates}</span>
        </div>
      </div>
    </React.Fragment>
  );
});
export default TopIcons;
