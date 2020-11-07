
export let levels = []
let lvls = [{
    mainword: "ملكس",
    word1: "ملك",
    coordinats:["l8","l9","l6","l7"],
    prompt:"Данное слово встречается в последних 5 сурах"
},
{
    mainword: "غازسق",
    word1: "غاسق",
    coordinats:["l8","l9","l4","l5","l10"],
    prompt:"Данное слово встречается в последних 5 сурах"
},
    {
        mainword: "حشبل",
        word1: "حبل",
        coordinats:["l8","l9","l6","l7"],
        prompt:"Данное слово встречается в последних 5 сурах"
    },
    {
        mainword: "فاتسح",
        word1: "فتح",
        coordinats:["l8","l9","l4","l5","l10"],
        prompt:"Данное слово встречается в последних 5 сурах"
    },
]

lvls.forEach((l, index) => {
    let answerVariants = []
    for (let index = 0; index < 5; index++) {
        if (l[`word${index + 1}`]) {
            answerVariants.push(l[`word${index + 1}`])
        }

    }
    levels.push([[l.mainword], answerVariants,l.coordinats,l.prompt])

})
