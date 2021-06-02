import { getCookie, setCookie } from "../store/cookies";
import { gameState } from "../store/mobxstore";

export function LevelRepo() {
  this.shuffle = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
      const j = Math.floor(Math.random() * (index + 1));
      const temp = array[index];
      array[index] = array[j];
      array[j] = temp;
    }
    // }

    return array;
  };
  this.showLineAndPrevLetter = (state, index) => {
    let linepoints = state.linePoints;
    linepoints.push(index);
    let list = state.previewLetter;
    list.push(state.word[index]);
    state.showline(linepoints, list);
  };
  this.isInDiv = (coordinats, state, index, letterWidth) => {
    let clientXInLetter =
      coordinats.x >= state.points[index].x &&
      coordinats.x <= state.points[index].x + letterWidth;
    let clientYInLetter =
      coordinats.y >= state.points[index].y &&
      coordinats.y <= state.points[index].y + 50;
    return clientXInLetter && clientYInLetter;
  };
  this.giveNextLevel = (state, id) => {
    let data = JSON.parse(getCookie("data"));
    let finished = data.finished;
    if (data.finished < id) {
      setCookie(
        "data",
        JSON.stringify({
          ...data,
          finished: data.finished + 1,
          dates: id < finished + 1 ? data.dates : state.dates,
          stars: [...data.stars, state.stars],
        })
      );
    }
  };
  this.compareWords = (words, state, id, data) => {
    if (words.word === words.rightWord) {
      state.setState((state) => ({
        ...state,
        word: [],
        stars: this.giveStars(true, state),
        isWord1Resolved: true,
        margin: "2em",
        dates:
          id < data.finished + 1
            ? data.dates
            : state.dates + this.giveStars(false, state),
      }));
    } else {
      state.setState((state) => ({
        ...state,
        stars: 0,
        isWrong: true,
        wrongAttempts: state.wrongAttempts + 1,
      }));
    }
  };
  this.clearLine = (words, id, state) => {
    let data = JSON.parse(getCookie("data"));
    if (state.linePoints[0] >= 0) {
      this.compareWords(words, state, id, data);
    }
  };
  this.giveStars = (isStar, state) => {
    if (state.isOpened) {
      return -20;
    } else if (state.isPromptUsed) {
      if (state.wrongAttempts > 3) {
        return 0;
      }
      switch (state.wrongAttempts) {
        case 0:
          return isStar ? 2 : 5;
          break;
        case 1:
          return isStar ? 1 : 2;
          break;
        case 3:
          return isStar ? 1 : 1;
          break;
      }
    } else if (state.wrongAttempts > 3) {
      return isStar ? 1 : 0;
    } else {
      switch (state.wrongAttempts) {
        case 0:
          return isStar ? 3 : 10;
          break;
        case 1:
          return isStar ? 2 : 5;
          break;
        case 3:
          return isStar ? 1 : 2;
          break;
        default:
          return 0;
      }
    }
  };
  this.spendDates = () => {
    let data = JSON.parse(getCookie("data"));
    let dates = data.dates;
    setCookie(
      "data",
      JSON.stringify({
        ...data,
        dates: dates <= 0 ? 0 : dates - 20,
      })
    );
  };
  this.useDates = (state, setState) => {
    if (state.dates < 20) {
      state.calcDates(true);
      setTimeout(() => state.calcDates(false), 1000);
    } else {
      state.setPrompt();
    }
  };
}
