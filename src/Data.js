import fes from "./img/fes.jpg"
import tanger from "./img/tanger.jpg"
import kairun from "./img/kairun.jpg"
import alkar from "./img/alkar.jpg"
import madina from "./img/madina.jpg"
import ornament from "./img/ornament.jpg"
export let levels = []
let lvls = [{
    mainword: "ملكس",
    word1: "ملك",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: "Данное слово встречается в одной из последних 5 сур, слово из 3 букв",
    img: fes
},
{
    mainword: "عيقد",
    word1: "عقد",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: "Данное слово встречается в одной из последних 5 сур, слово из 3 букв",
    img: tanger
},
{
    mainword: "احدص",
    word1: "احد",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: "Данное слово встречается в одной из последних 5 сур, слово из 3 букв",
    img: kairun
},
{
    mainword: "مسقد",
    word1: "مسد",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: "Данное слово встречается в одной из последних 5 сур, слово из 3 букв",
    img: alkar
},
{
    mainword: "نقرص",
    word1: "نصر",
    coordinats: ["l8", "l9", "l6", "l7"],
    prompt: "Данное слово встречается в одной из последних 5 сур, слово из 3 букв",
    img: madina
},
{
    mainword: "دليمن",
    word1: "دين",
    coordinats: ["l8", "l9", "l4", "l5", "l10"],
    prompt: "Данное слово встречается в одной из следующих сур\n:Аль-Маун,Аль-Каусар,Аль-Кафирун, слово из 3 букв",
    img: ornament
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
