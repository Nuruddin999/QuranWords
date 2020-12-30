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
{
    mainword: "شهريد",
    word1: "شهيد",
     coordinats: ["l8", "l9", "l4", "l5", "l10"],
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
    mainword: "مزكاة",
    word1: "زكاة",
     coordinats: ["l8", "l9", "l4", "l5", "l10"],
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
    mainword: "مطلقع",
    word1: "مطلع",
     coordinats: ["l8", "l9", "l4", "l5", "l10"],
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
    mainword: "تقوضي",
    word1: "تقوي",
     coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Кадр","Аль-Алак"],
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
    mainword: "اطشعام",
    word1: "اطعام",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Балад","Аш-Шамс"],
        letters: 5
    },
    img: {
        mob:cairo,
        desc:cairodesc,
    }
},
{
    mainword: "فرثعون",
    word1: "فرعون",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
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
    mainword: "لاغيوة",
    word1: "لاغية",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аль-Гашийа","Аль-Кадр"],
        letters: 5
    },
    img: {
        mob:alazhar,
        desc:alazhardesc,
    }
},
{
    mainword: "ترالئب",
    word1: "ترائب",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
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
    mainword: "مضشهود",
    word1: "مشهود",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
    prompt: {
        text: "Данное слово встречается в одной из следующих сур:",
        suras: ["Аш-Шамс","Ат-Тарик"],
        letters: 5
    },
    img: {
        mob:alexandriamob,
        desc:alexandria,
    }
},{
    mainword: "تسنيمل",
    word1: "تسنيم",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
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
    mainword: "كواكسب",
    word1: "كواكب",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
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
    mainword: "مجىنون",
    word1: "مجنون",
    coordinats: ["l1","l2", "l3", "l11", "l12","l13"],
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
