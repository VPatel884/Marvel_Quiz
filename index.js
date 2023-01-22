let readlineSync = require('readline-sync');

let score = 0;


let userName = readlineSync.question("Enter your name: ");
console.log("hey! " + userName + " Welcome to awesome MCU quiz.");
console.log("Lets see how well you know your superheroes.");
console.log("****************************");

function quiz(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right");
    score++;
  } else {
    console.log("You are wrong!");
    score--;
  }
  console.log("Your current score is: " + score);
  console.log("****************************");
}
// {question: "", answer: ""}
let questions = [{
    question: "What was the first Marvel movie to earn $1 billion? ",
    answer: "The Avengers"
  },
  {
    question: "In the first Avengers movie, how many avengers do we actually see? ",
    answer: "6"
  },
  {
    question: "Who designed the Quinjet? ",
    answer: "Black Panther"
  },
  {
    question: "In Wakanda, what are the female warriors referred to as? ",
    answer: "Dora Milaje"
  },
  {
    question: "Who was the first female superhero to appear in the title of an MCU film? ",
    answer: "The Wasp"
  }
];


for (let i = 0; i < questions.length; i++) {
  currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

if (readlineSync.keyInYN('Wanna play more?')) {
  console.log("Thank you! " + userName + " for your response.");
  console.log("****************************");
  let questions = [{
      question: "What organization does Captain America battle in the movie Captain America: The First Avenger? ",
      answer: "Hydra"
    },
    {
      question: "Black Widow sacrifices herself to obtain which Infinity Stone in Avengers: Endgame? ",
      answer: "The Soul Stone"
    },
    {
      question: "Captain Marvel lived with which alien race from 1989 to 1995? ",
      answer: "The Kree"
    },
    {
      question: "What’s Deadpool's real name? ",
      answer: "Wade Wilson"
    },
    {
      question: "Peter Quill's father Ego is a what? ",
      answer: "Celestial"
    }
  ];


  for (let i = 0; i < questions.length; i++) {
    currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer);
  }
} else {
  console.log("Thank you! " + userName + " for your response.");
  console.log("****************************");
}

console.log("Well done! " + userName + ".");
console.log("Your final score is: " + score);