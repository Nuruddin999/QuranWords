import { getCookie, setCookie } from "./cookies";

export function LevelRepo() {
    this.giveNextLevel = (state, id) => {
        let data = JSON.parse(getCookie("data"))
        let finished = data.finished
        if (data.finished < id) {
            setCookie("data", JSON.stringify({
                ...data,
                finished: data.finished + 1,
                dates: id < finished + 1 ? data.dates : state.dates,
                stars: [...data.stars, state.stars]
            }))
        }
    }
    this.compareWords = (words, state, id, data) => {
        if (words.word === words.rightWord) {
            state.setState(state => ({
                ...state,
                stars: this.giveStars(true, state),
                isWord1Resolved: true,
                margin: "2em",
                dates: id < data.finished + 1 ? data.dates : state.dates + this.giveStars(false, state)
            }))
        } else {
            state.setState(state => ({ ...state, stars: 0, isWrong: true, wrongAttempts: state.wrongAttempts + 1 }))
        }
    }
    this.clearLine = (words, id, state) => {
        let data = JSON.parse(getCookie("data"))
        if (state.state.linePoints[0] >= 0) {
            this.compareWords(words, state, id, data)
        }

    }
    this.giveStars = (isStar, state) => {
        if (state.isPromptUsed) {
            if (state.wrongAttempts > 3) {
                return 0
            }
            switch (state.wrongAttempts) {
                case 0:
                    return isStar ? 2 : 1;
                    break;
                case 1:
                    return isStar ? 1 : 0;
                    break;
                case 3:
                    return 0;
                    break;
            }
        }
        if (state.wrongAttempts > 3) {
            return isStar ? 1 : 0;
        }
        switch (state.wrongAttempts) {
            case 0:
                return isStar ? 3 : 2;
                break;
            case 1:
                return isStar ? 2 : 1;
                break;
            case 3:
                return 1;
                break;
            default:
                return 0;
        }
    }
}