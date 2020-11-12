import fes from "./img/fes.jpg"
import tanger from "./img/tanger.jpg"
import kairun from "./img/kairun.jpg"
import alkar from "./img/alkar.jpg"
export let levels = []
let lvls = [{
    mainword: "ملكس",
    word1: "ملك",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: "Данное слово встречается в последних 5 сурах",
    img: fes
},
    {
        mainword: "غازسق",
        word1: "غاسق",
        coordinats: ["l8", "l9", "l4", "l5", "l10"],
        prompt: "Данное слово встречается в последних 5 сурах",
        img: tanger
    },
    {
        mainword: "حشبل",
        word1: "حبل",
        coordinats: ["l8", "l9", "l6", "l7"],
        prompt: "Данное слово встречается в последних 5 сурах",
        img: kairun
    },
    {
        mainword: "فاتسح",
        word1: "فتح",
        coordinats: ["l8", "l9", "l4", "l5", "l10"],
        prompt: "Данное слово встречается в последних 5 сурах",
        img: alkar
    },
]

lvls.forEach((l, index) => {
    let answerVariants = []
    for (let index = 0; index < 5; index++) {
        if (l[`word${index + 1}`]) {
            answerVariants.push(l[`word${index + 1}`])
        }

    }
    levels.push([[l.mainword], answerVariants, l.coordinats, l.prompt, l.img])

})
