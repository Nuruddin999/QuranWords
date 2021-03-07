import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import { getCookie, setCookie } from "./cookies";

export class GameState {
  word = [];
  currentLevel = 1;
  data = {};
  toLevels = false;
  toLevel = false;
  isWord1Resolved = false;
  stars = 0;
  dates = 0;
  isPromptUsed = false;
  noDatesWindow = false;
  started = true;
  linePoints = [];
  refList = [];
  points = [];
  previewLetter = [];
  currnetWord = "";
  isWrong = false;
  wrongAttempts = 0;
  isFinished = false;
  isGameFinished = false;
  isPrompt = false;
  isOpened = false;
  notYourLevel = false;
  classes = [];
  back = "";
  margin = "0";
  prompt = {};
  backLoaded = false;
  constructor() {
    makeAutoObservable(this);
  }
  setValue(props, val) {
    this[props] = val;
  }
  showLineAndPrevLetter(index) {
    let linepoints = this.linePoints;
    linepoints.push(index);
    let list = this.previewLetter;
    list.push(this.word[index]);
    this.started = false;
    this.linePoints = linepoints;
    this.previewLetter = list;
  }
  isInDiv(coordinats, index, letterWidth) {
    let clientXInLetter =
      coordinats.x >= this.points[index].x &&
      coordinats.x <= this.points[index].x + letterWidth;
    let clientYInLetter =
      coordinats.y >= this.points[index].y &&
      coordinats.y <= this.points[index].y + 50;
    return clientXInLetter && clientYInLetter;
  }
  giveNextLevel(id) {
    let data = JSON.parse(getCookie("data"));
    let finished = data.finished;
    if (data.finished < id) {
      setCookie(
        "data",
        JSON.stringify({
          ...data,
          finished: data.finished + 1,
          dates: id < finished + 1 ? data.dates : this.dates,
          stars: [...data.stars, this.stars],
        })
      );
    } else {
      let newStars = data.stars;
      newStars[id - 1] = this.stars;
      setCookie(
        "data",
        JSON.stringify({
          ...data,
          stars: newStars,
        })
      );
    }
  }
  compareWords(words, id, data) {
    if (words.word === words.rightWord) {
      this.word = [];
      this.stars = this.giveStars(true);
      this.isWord1Resolved = true;
      this.margin = "2em";
      this.dates =
        id < data.finished + 1
          ? data.dates
          : this.dates + this.giveStars(false);
    } else {
      this.stars = 0;
      this.isWrong = true;
      this.wrongAttempts = this.wrongAttempts + 1;
    }
  }
  clearLine(words, id) {
    let data = JSON.parse(getCookie("data"));
    if (this.linePoints[0] >= 0) {
      this.compareWords(words, id, data);
    }
  }
  giveStars(isStar) {
    if (this.isOpened) {
      return isStar ? 0 : -20;
    } else if (this.isPromptUsed) {
      if (this.wrongAttempts > 3) {
        return 0;
      }
      switch (this.wrongAttempts) {
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
    } else if (this.wrongAttempts >= 3) {
      return isStar ? 1 : 0;
    } else {
      switch (this.wrongAttempts) {
        case 0:
          return isStar ? 3 : 10;
          break;
        case 1:
          return isStar ? 2 : 5;
          break;
        case 2:
          return isStar ? 1 : 2;
          break;
        default:
          return 0;
      }
    }
  }
  spendDates() {
    let data = JSON.parse(getCookie("data"));
    let dates = data.dates;
    setCookie(
      "data",
      JSON.stringify({
        ...data,
        dates: dates <= 0 ? 0 : dates - 20,
      })
    );
  }
  useDates(isTrue) {
    if (this.dates < 20) {
      this.noDatesWindow = isTrue;
      setTimeout(() => (this.noDatesWindow = false), 1000);
    } else {
      this.isPrompt = false;
      this.isPromptUsed = true;
    }
  }
  renderWrong() {
    this.stars = 0;
    this.isWrong = true;
    this.wrongAttempts += 1;
  }
  resetWord() {
    this.currnetWord = this.previewLetter.join("");
    this.linePoints = [];
  }
  backToLevel() {
    this.toLevels = true;
  }
  openWord(isOpened) {
    this.noDatesWindow = isOpened;
  }
  open() {
    this.isOpened = true;
  }
  runGame(points, dates, level, img) {
    this.points = points;
    this.isPrompt = true;
    this.dates = dates;
    this.toLevel = false;
    this.prompt = level;
    this.back = img;
  }
  finishGame() {
    this.isFinished = true;
    this.previewLetter = [];
    this.started = true;
    this.toLevels = false;
  }
  finishWithWrong() {
    this.isWrong = false;
    this.previewLetter = [];
    this.started = true;
    this.toLevels = false;
  }
  spendDates() {
    let data = JSON.parse(getCookie("data"));
    let dates = data.dates;
    setCookie(
      "data",
      JSON.stringify({
        ...data,
        dates: dates <= 0 ? 0 : dates - 20,
      })
    );
  }
  goToLevel() {
    let data = JSON.parse(getCookie("data"));
    this.toLevels = false;
    this.isPrompt = true;
    this.data = data;
  }
  calcDates() {
    this.dates = this.dates <= 0 ? 0 : this.dates - 10;
  }
  goToLevels() {
    this.toLevels = true;
    this.isWord1Resolved = false;
    this.stars = 0;
    this.letters = [];
    this.started = true;
    this.linePoints = [];
    this.isPromptUsed = false;
    this.refList = [];
    this.points = [];
    this.previewLetter = [];
    this.currnetWord = "";
    this.isGreen = false;
    this.wrongAttempts = 0;
    this.isFinished = false;
    this.classes = [];
  }
  toNextLevel() {
    this.toLevels = false;
    this.toLevel = true;
    this.isWord1Resolved = false;
    this.stars = 0;
    this.letters = [];
    this.started = true;
    this.linePoints = [];
    this.isPromptUsed = false;
    this.refList = [];
    this.points = [];
    this.previewLetter = [];
    this.currnetWord = "";
    this.isGreen = false;
    this.wrongAttempts = 0;
    this.isFinished = false;
    this.classes = [];
  }
}
