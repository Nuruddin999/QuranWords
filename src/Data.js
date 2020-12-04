import fes from "./img/fes.jpg"
import tanger from "./img/tanger.jpg"
import kairun from "./img/kairun.jpg"
import alkar from "./img/alkar.jpg"
import madina from "./img/madina.jpg"
import ornament from "./img/ornament.jpg"
import purple from "./img/purple.jpg"
import zayed from "./img/zayed.jpg"
import sunset from "./img/sunset.jpg"
import stambul from "./img/stambul.jpg"
export let levels = []
let lvls = [{
    mainword: "ملكس",
    word1: "ملك",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ан-Нас", "Аль-Фалак", "Аль-Ихлас"],
        letters: 3
    },
    img: fes
},
{
    mainword: "عيقد",
    word1: "عقد",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Масад", "Аль-Фалак", "Аль-Ихлас"],
        letters: 3
    },
    img: tanger
},
{
    mainword: "احدص",
    word1: "احد",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ан-Наср", "Аль-Фалак", "Аль-Ихлас"],
        letters: 3
    },
    img: kairun
},
{
    mainword: "مسقد",
    word1: "مسد",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ан-Наср", "Аль-Масад", "Аль-Фалак"],
        letters: 3
    },
    img: alkar
},
{
    mainword: "نقرص",
    word1: "نصر",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ан-Наср", "Аль-Ихлас", "Аль-Маун"],
        letters: 3
    },
    img: madina
},
{
    mainword: "دليمن",
    word1: "دين",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Кафирун", "Ан-Наср", "Аль-Филь"],
        letters: 3
    },
    img: ornament
},
{
    mainword: "بجيت",
    word1: "بيت",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Курейш ", "Аль-Филь", "Ан-Наср"],
        letters: 3
    },
    img: purple
},
{
    mainword: "سخوف",
    word1: "خوف",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Каусар", "Аль-Филь", "Курейш"],
        letters: 3
    },
    img: zayed
},
{
    mainword: "حطمة",
    word1: "حطمة",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Маун", "Курейш", "Аль-Хумаза"],
        letters: 4
    },
    img: sunset
},
{
    mainword: "جحيسم",
    word1: "جحيم",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ат-Такасур", "Аль-Хумаза", "Аль-Аср"],
        letters: 4
    },
    img: stambul
},
{
    mainword: "نعصكيم",
    word1: "نعيم",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ат-Такасур", "Аль-Хумаза", "Аль-Аср"],
        letters: 4
    },
    img: stambul
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
