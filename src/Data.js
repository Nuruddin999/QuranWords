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
import morocco from "./img/desc/morocco.jpg"
import night from "./img/desc/night.jpg"
import kairunDesc from "./img/desc/kairun.jpg"
import house from "./img/desc/house.jpg"
import houses from "./img/desc/houses.jpg"
import mayak from "./img/desc/mayak.jpg"
import gate from "./img/desc/gate.jpg"
import coast from "./img/desc/coast.jpg"
import rabat from "./img/desc/rabat.jpg"
import desertDesc from "./img/desc/desert.jpg"
import caret from "./img/desc/caret.jpg"
import galata from "./img/galata.jpg"
import istanbul from "./img/desc/istanbul.jpg"
import stan2 from "./img/stan2.jpg"
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
    img: {
        mob:fes,
        desc:night,
    }
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
    img: {
        mob:tanger,
        desc:house,
    }
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
    img: {
        mob:kairun,
        desc:kairunDesc,
    }
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
    img: {
        mob:alkar,
        desc:mayak,
    }
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
    img: {
        mob:madina,
        desc:gate,
    }
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
    img: {
        mob:ornament,
        desc:coast,
    }
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
    img: {
        mob:purple,
        desc:rabat,
    }
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
    img: {
        mob:zayed,
        desc:houses,
    }
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
    img: {
        mob:sunset,
        desc:desertDesc,
    }
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
    img: {
        mob:stambul,
        desc:caret,
    }
},
{
    mainword: "نعصكيم",
    word1: "نعيم",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ат-Такасур", "Аль-Хумаза", "Аль-Аср"],
        letters: 4
    },
    img: {
        mob:galata,
        desc:morocco,
    }
},
{
    mainword: "مجبال",
    word1: "جبال",
     coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Курейш", "Аль-Кариа", "Аль-Аср"],
        letters: 4
    },
    img: {
        mob:stan2,
        desc:istanbul,
    }
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
