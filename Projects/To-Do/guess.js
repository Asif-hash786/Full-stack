const max=prompt("write the maximum number");

const random=Math.floor(Math.random() * max) + 1;

let guess=prompt("guess the number");

while(true){
  if(guess=="exit"){
    console.log("user exit"); 
    break;
  }
  if(guess==random){
    console.log("congrats you guess it right random number was",random);
    break;
  }else if(guess<random){
    guess=prompt("your guess is low try agin");
  }else{
    guess=prompt("your guess is larger try agin");
  }
}