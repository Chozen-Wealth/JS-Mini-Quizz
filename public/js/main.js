let questions = [
    {
        num: 1,
        question: "Quel est le nom complet du père de Naruto ?",
        reponse: "Minato Namikaze",
        options: [
            "Minato Namikaze",
            "Akuzo Namikaze",
            "Minato Uchiha",
            "Minato Konoha"
        ]
    },
    {
        num: 2,
        question: "Quelle est la technique signature de Kakashi Hatake ?",
        reponse: "Chidori",
        options: [
            "Rasengan",
            "Amaterasu",
            "Chidori",
            "Susanoo"
        ]
    },
    {
        num: 3,
        question: "Comment s'appelle le démon renard scellé en Naruto ?",
        reponse: "Kurama",
        options: [
            "Shukaku",
            "Kurama",
            "Gyūki",
            "Matatabi"
        ]
    },
    {
        num: 4,
        question: "Quel est le nom du village caché de Naruto ?",
        reponse: "Konoha",
        options: [
            "Suna",
            "Iwa",
            "Konoha",
            "Kiri"
        ]
    },
    {
        num: 5,
        question: "Qui est le premier Hokage de Konoha ?",
        reponse: "Hashirama",
        options: [
            "Tobirama",
            "Hashirama",
            "Hiruzen",
            "Minato"
        ]
    },
    {
        num: 6,
        question: "Quel est le dojutsu du clan Uchiha ?",
        reponse: "Sharingan",
        options: [
            "Byakugan",
            "Rinnegan",
            "Sharingan",
            "Tenseigan"
        ]
    },
    {
        num: 7,
        question: "Comment s'appelle l'organisation criminelle à laquelle appartient Itachi ?",
        reponse: "Akatsuki",
        options: [
            "Kara",
            "Akatsuki",
            "Anbu",
            "Oto"
        ]
    },
    {
        num: 8,
        question: "Qui est le maître de Jiraiya et Tsunade ?",
        reponse: "Hiruzen",
        options: [
            "Hiruzen",
            "Hashirama",
            "Orochimaru",
            "Danzo"
        ]
    },
    {
        num: 9,
        question: "Quel est le nom du frère cadet d'Itachi ?",
        reponse: "Sasuke",
        options: [
            "Madara",
            "Sasuke",
            "Shisui",
            "Obito"
        ]
    },
    {
        num: 10,
        question: "Quel est le nom de l'arme utilisée par Sasuke Uchiha pendant sa quête de vengeance ?",
        reponse: "Katana",
        options: [
            "Fuma Shuriken",
            "Katana",
            "Kunaï",
            "Éventail"
        ]
    },
];


let usernamerep = prompt("Entrez votre nom d'utilisateur :");
console.log(usernamerep);

let username = document.querySelector("#username");
username.innerText = usernamerep;

const boxQuizz = document.querySelector(".box-quizz");
let questionCount = 0;
let userScore = 0;

const boutonNext = document.querySelector(".bouton-next")

afficherQuestions(0)
boutonNext.addEventListener("click", ()=> {
    if (questionCount < questions.length - 1) {
        questionCount++;
        afficherQuestions(questionCount);
    }
    else {
        console.log("Questions Complétées.")
    }
    boutonNext.classList.remove("active");
})


function afficherQuestions(index) {
    const listeOptions = document.querySelector(".liste-options");
    const questionText = document.querySelector(".question-text");
    questionText.textContent = `${questions[index].num}) ${questions[index].question}`;
    
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    
    listeOptions.innerHTML = optionTag;
    
    const option = document.querySelectorAll(".option");
    for ( let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionChoisie(this)");
    }
}

function optionChoisie(reponse) {
    const listeOptions = document.querySelector(".liste-options");
    let userReponse = reponse.textContent;
    let bonneReponse = questions[questionCount].reponse;
    let allOptions = listeOptions.children.length;
    
    if (userReponse == bonneReponse) {
        reponse.classList.add("correct");
        userScore+=1
        userScoreFonction()
    }
    else {
        reponse.classList.add("incorrect");
        
        for (let i = 0; i < allOptions; i++) {
            if (listeOptions.children[i].textContent == bonneReponse) {
                listeOptions.children[i].classList.add("correct")
            }
        }
    }
    
    for (let i = 0; i < allOptions; i++) {
        listeOptions.children[i].classList.add("desactiver");
    }
    boutonNext.classList.add("active");
}

function userScoreFonction() {
    const userScoreText = document.querySelector(".userscore");
    userScoreText.innerText = userScore;
}



// // Données
// const questions = [
//     {
//         question: "1) Quel est le nom complet du père de Naruto ?",
//         reponse : "Minato Namikaze"
//     },
//     {
//         question: "2) Quelle est la technique signature de Kakashi Hatake ?",
//         reponse : "Chidori"
//     },
//     {
//         question: "3) Comment s'appelle le démon renard scellé en Naruto ?",
//         reponse : "Kurama"
//     },
//     {
//         question: "4) Quel est le nom du village caché de Naruto ?",
//         reponse : "Konoha"
//     },
//     {
//         question: "5) Qui est le premier Hokage de Konoha ?",
//         reponse : "Hashirama"
//     },
//     {
//         question: "6) Quel est le dojutsu du clan Uchiha ?",
//         reponse : "Sharingan"
//     },
//     {
//         question: "7) Comment s'appelle l'organisation criminelle à laquelle appartient Itachi ?",
//         reponse : "Akatsuki"
//     },
//     {
//         question: "8) Qui est le maître de Jiraiya et Tsunade ?",
//         reponse : "Hiruzen"
//     },
//     {
//         question: "9) Quel est le nom du frère cadet d'Itachi ?",
//         reponse : "Sasuke"
//     },
//     {
//         question: "10) Quel est le nom de l'arme utilisée par Sasuke Uchiha pendant sa quête de vengeance ?",
//         reponse : "Katana"
//     },
// ]

// // Démarrage message de bienvenue.
// let score = 0
// alert("Bienvenue dans le Quizz au thème de Naruto !")

// for (let i = 0; i<questions.length; i+=1) {
//     let repUser = prompt(questions[i].question);

//     if ( repUser === null) {
//         console.log("Vous avez annulé le Quizz");
//         break;
//     }

//     repUser = repUser.toLowerCase();

//     if (repUser.includes(questions[i].reponse.toLowerCase())) {
//         console.log("Bonne réponse !");
//         score += 1;
//     }
//     else {
//         console.log("Mauvaise réponse ! La réponse était : "+ questions[i].reponse);
//     }
// }

// if (score <= 1) {
//     alert("Tu as répondu juste à "+ score +" question sur "+ questions.length)
//     console.log("Tu as répondu juste à "+ score +" question sur "+ questions.length)
// }
// else {
//     alert("Tu as répondu juste à "+ score +" questions sur "+ questions.length)
//     console.log("Tu as répondu juste à "+ score +" questions sur "+ questions.length)
// }