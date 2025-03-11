// Données
const questions = [
    {
        question: "Quel est le nom complet du père de Naruto ?",
        reponse : "Minato Namikaze"
    },
    {
        question: "Quelle est la technique signature de Kakashi Hatake ?",
        reponse : "Chidori"
    },
    {
        question: "Comment s'appelle le démon renard scellé en Naruto ?",
        reponse : "Kurama"
    },
    {
        question: "Quel est le nom du village caché de Naruto ?",
        reponse : "Konoha"
    },
    {
        question: "Qui est le premier Hokage de Konoha ?",
        reponse : "Hashirama"
    },
    {
        question: "Quel est le dojutsu du clan Uchiha ?",
        reponse : "Sharingan"
    },
    {
        question: "Comment s'appelle l'organisation criminelle à laquelle appartient Itachi ?",
        reponse : "Akatsuki"
    },
    {
        question: "Qui est le maître de Jiraiya et Tsunade ?",
        reponse : "Hiruzen"
    },
    {
        question: "Quel est le nom du frère cadet d'Itachi ?",
        reponse : "Sasuke"
    },
    {
        question: "Quel est le nom de l'arme utilisée par Sasuke Uchiha pendant sa quête de vengeance ?",
        reponse : "Katana"
    },
]

// Démarrage message de bienvenue.
let score = 0
alert("Bienvenue dans le Quizz au thème de Naruto !")

for (let i = 0; i<questions.length; i+=1) {
    let repUser = prompt(questions[i].question);

    if ( repUser === null) {
        console.log("Vous avez annulé le Quizz");
        break;
    }

    repUser = repUser.toLowerCase();

    if (repUser.includes(questions[i].reponse.toLowerCase())) {
        console.log("Bonne réponse !");
        score += 1;
    }
    else {
        console.log("Mauvaise réponse ! La réponse était : "+ questions[i].reponse);
    }
}