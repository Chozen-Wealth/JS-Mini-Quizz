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