var readlineSync = require('readline-sync');

var name = readlineSync.question("Hey what is your name?");
console.log("hi "+name+"Lets start with!!");

function play(question,answer)
  {
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toLowerCase() === answer.toLowerCase())
    {
      console.log("Correct");
    }
    else{
      console.log('Wrong');
    }    
  }

play("What's my fav color?",'Blue'); 



