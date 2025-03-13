// Collection de toutes les questions avec leurs réponses et leurs options.
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

// Demande à l'utilisateur d'entrer son nom et le ré-écrire dans le HTML.
let usernamerep = prompt("Entrez votre nom d'utilisateur :");
let username = document.querySelector("#username");
username.innerText = usernamerep;

// Déclaration des variables utiles.
const boxQuizz = document.querySelector(".box-quizz");
const boxResultat = document.querySelector(".box-result")
const boutonNext = document.querySelector(".bouton-next")
let scoreFinale = document.querySelector(".userscorefinale")
let questionCount = 0;
let userScore = 0;


// Appel de la fonction pour afficher la première question
afficherQuestions(0)

// Event lors du click sur le bouton Next
boutonNext.addEventListener("click", ()=> {
    if (questionCount < questions.length - 1) {
        questionCount++;
        afficherQuestions(questionCount);
    }
    else {
        console.log("Questions Complétées.")
        afficherResultat()
    }
    
    boutonNext.classList.remove("active");
})

// Fonction d'affichage de la question selon l'index dans la collection.
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

// Fonction pour afficher l'option choisie (correcte ou fausse).
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

// Fonction pour afficher le score de l'utilisateur.
function userScoreFonction() {
    const userScoreText = document.querySelector(".userscore");
    userScoreText.innerText = userScore;
    scoreFinale.innerText = userScore;
}

// Fonction pour cacher la première boîte à questions et afficher la boîte des résultats.
function afficherResultat() {
    boxQuizz.classList.add("cacher")
    boxResultat.classList.remove("cacher")
}