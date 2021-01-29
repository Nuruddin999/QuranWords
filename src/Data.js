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
import bluemos from "./img/bluemos.jpg"
import island from "./img/desc/island.jpg"
import kapadokia from "./img/desc/kapadokia.jpg"
import kapadokiamob from "./img/kapadokia.jpg"
import cairo from "./img/cairo.jpg"
import cairodesc from "./img/desc/cairo.jpg"
import alazhardesc from "./img/desc/alazhar.jpg"
import alazhar from "./img/alazhar.jpg"
import alexandria from "./img/desc/alexandria.jpg"
import alexandriamob from "./img/alexandriamob.jpg"
import lighthouse from "./img/desc/lighthouse.jpg"
import desert2 from "./img/desert2.jpg"
export let levels = []
let lvls = [{
    mainword: "ملك",
    word1: "ملك",
    coordinats: ["l1", "l6", "l7"],
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
    mainword: "عقد",
    word1: "عقد",
    coordinats: ["l1", "l6", "l7"],
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
    mainword: "احد",
    word1: "احد",
    coordinats: ["l1", "l6", "l7"],
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
    mainword: "مسد",
    word1: "مسد",
    coordinats: ["l1", "l6", "l7"],
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
    mainword: "نرص",
    word1: "نصر",
    coordinats: ["l1", "l6", "l7"],
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
    mainword: "دين",
    word1: "دين",
    coordinats: ["l1", "l6", "l7"],
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
    mainword: "بيت",
    word1: "بيت",
    coordinats: ["l1", "l6", "l7"],
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
    mainword: "خوف",
    word1: "خوف",
    coordinats: ["l1", "l6", "l7"],
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
    mainword: "جحيم",
    word1: "جحيم",
    coordinats: ["l8", "l9", "l6", "l7"],
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
    mainword: "نعيم",
    word1: "نعيم",
    coordinats: ["l8", "l9", "l6", "l7"],
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
    mainword: "جبال",
    word1: "جبال",
    coordinats: ["l8", "l9", "l6", "l7"],
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
{
    mainword: "شهيد",
    word1: "شهيد",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Кариа ", "Аз-Залзала", "Аль-Адийат"],
        letters: 4
    },
    img: {
        mob:stan2,
        desc:istanbul,
    }
},
{
    mainword: "زكاة",
    word1: "زكاة",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Баййина"],
        letters: 4
    },
    img: {
        mob:bluemos,
        desc:island,
    }
},
{
    mainword: "مطلع",
    word1: "مطلع",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Кадр","Аз-Залзала","Аль-Кариа"],
        letters: 4
    },
    img: {
        mob:bluemos,
        desc:island,
    }
},

{
    mainword: "تقوي",
    word1: "تقوي",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Алак"],
        letters: 4
    },
    img: {
        mob:kapadokiamob,
        desc:kapadokia,
    }
},
{
    mainword: "تقويم",
    word1: "تقويم",
     coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ат-Тин","Аль-Алак"],
        letters: 5
    },
    img: {
        mob:kapadokiamob,
        desc:kapadokia,
    }
},
{
    mainword: "اطعام",
    word1: "اطعام",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Балад"],
        letters: 5
    },
    img: {
        mob:cairo,
        desc:cairodesc,
    }
},
{
    mainword: "فرعون",
    word1: "فرعون",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Фаджр"],
        letters: 5
    },
    img: {
        mob:cairo,
        desc:cairodesc,
    }
},
{
    mainword: "لاغية",
    word1: "لاغية",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Гашийа"],
        letters: 5
    },
    img: {
        mob:alazhar,
        desc:alazhardesc,
    }
},
{
    mainword: "ترائب",
    word1: "ترائب",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аш-Шамс","Ат-Тарик"],
        letters: 5
    },
    img: {
        mob:alazhar,
        desc:alazhardesc,
    }
},
{
    mainword: "مشهود",
    word1: "مشهود",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Бурудж"],
        letters: 5
    },
    img: {
        mob:alexandriamob,
        desc:alexandria,
    }
},{
    mainword: "تسنيم",
    word1: "تسنيم",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Мутаффифин"],
        letters: 5
    },
    img: {
        mob:alexandriamob,
        desc:alexandria,
    }
},
,{
    mainword: "كواكب",
    word1: "كواكب",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Фаджр","Аль-Инфитар"],
        letters: 5
    },
    img: {
        mob:desert2,
        desc:lighthouse,
    }
},
,{
    mainword: "مجنون",
    word1: "مجنون",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Ат-Таквир"],
        letters: 5
    },
    img: {
        mob:desert2,
        desc:lighthouse,
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
