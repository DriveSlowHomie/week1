//List of 5 words in an array
let arrayNames = [
  'mocha',
  'coffee',
  'latte',
  'frappuccino',
  'water'
];


//Start the game
function start(){
  randomWord();
  console.log(random);
  for (let x = 0; x < random.length; x++) {
    spans[x].innerHTML = "_";
  }
  let stop = 0;
  do {
    stop = doLoop();
  }
  while (stop != 1);
}


let right:number = 0;
let wrong:number = 0;
//loop to check win or loss, returns stop value
function doLoop(){
  userInput();
  console.log(input);
  let match = check();
  if (match >= 1){ //if you have multiple letters, need >=
    right = right + match;
    if (right >= random.length){
      alert ("YOU WON!");
      return 1;
    }
  }
  else {
    wrong = wrong + 1;
    if (wrong >= 6 ){
      alert("YOU LOST!");
      return 1;
    }
  }
  return 0; //return values here to stop the game later, stops when != 1
}


//Grabs a random word from the array
let random;
function randomWord(){
  random = arrayNames[Math.floor(Math.random() * arrayNames.length)]
}

//Prompt user input
let input:string;
function userInput(){
  input = prompt('Guess a Letter!');
}

//Check if letter matches,
function check(){
  let match = 0; //This is importat to reset match for next input
  console.log("length " + random.length);
  for (let i = 0; i < random.length; i++){
    let val = spans[i];
    if (input == random.charAt(i)){
      console.log('i ' + i);
      val.innerHTML = input;
      match = match + 1;
    }
  }
  return match;
}





//There's probably an easier way to say this but I'm out of caffine
let spans = [
            document.getElementById('span0'),
            document.getElementById('span1'),
            document.getElementById('span2'),
            document.getElementById('span3'),
            document.getElementById('span4'),
            document.getElementById('span5'),
            document.getElementById('span6'),
            document.getElementById('span7'),
            document.getElementById('span8'),
            document.getElementById('span9'),
            document.getElementById('span10')
];
