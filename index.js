let readlineSync = require('readline-sync');
let score = 0;
let userName = readlineSync.question('What is your Name ? ')

console.log('Welcome' + " " + userName + " " +'to the Ultimate quiz of Taarak Mehta Ka Ooltah Chashmah\n');
function play(question,answer){
  let userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    score++
    console.log('Right Answer')
  } else{
    console.log('Wrong Answer')
  }
  console.log('Current Score ' + score + '\n')
}

let questionList = [
  {
    question: "1. Who All Are Part Of Tapu Sena?\n\n a. Tapu, Sonu, Goli, Gogi, and Pinku.\n b. Tapu, Gogo, and Pinki.\n c. Tapu akela hi puri sena hai.\n d. Ross and Will Colbert\n\n",
    answer: 'a'
  },
  {
    question: "2. What is Jethalal's father, Bapu ji's, real name?\n\n a. Champak Sharma Gada.\n b. Natwarlal Prabhashankar Udhaiwala.\n c. Champaklal Jayantilal Gada.\n d. Jayantilal Giridharlal Gada.\n\n",
    answer: 'c'
  },
  {
    question: "3. Most evenings, the group gets together at a shop to chat.\n What is the name of the shop?\n\n a. Abdul Miyan's Store.\n b. Aao-Khao store.\n c. All-In-One General Store.\n d. General Store.\n\n",
    answer: 'c'
  },
  {
    question: "4. What is the name of the company where Popatlal works as a reporter?\n\n a. Express Mail.\n b. Toofan Mail.\n c. Aandhi Express\n d. Toofan Express.\n\n",
    answer: 'd'
  },
  {
    question: "5. Complete this line from the title song of the show:\n Problem toh hai sabke saath Bas ___ ki hai baat\n\n a. suljhane\n b. nazariye\n c. bhulane\n d. dekhne.\n\n",
    answer: 'b' 
  }
];

for(let i = 0; i<questionList.length; i++){
  play(questionList[i].question, questionList[i].answer)
}
console.log('Well Done Your Final Score is ' + score)