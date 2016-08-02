var arrayNames = [
    'mocha',
    'coffee',
    'latte',
    'frappuccino',
    'water'
];
function start() {
    randomWord();
    console.log(random);
    for (var x = 0; x < random.length; x++) {
        spans[x].innerHTML = "_";
    }
    var stop = 0;
    do {
        stop = doLoop();
    } while (stop != 1);
}
var right = 0;
var wrong = 0;
function doLoop() {
    userInput();
    console.log(input);
    var match = check();
    if (match >= 1) {
        right = right + match;
        if (right >= random.length) {
            alert("YOU WON!");
            return 1;
        }
    }
    else {
        wrong = wrong + 1;
        if (wrong >= 6) {
            alert("YOU LOST!");
            return 1;
        }
    }
    return 0;
}
var random;
function randomWord() {
    random = arrayNames[Math.floor(Math.random() * arrayNames.length)];
}
var input;
function userInput() {
    input = prompt('Guess a Letter!');
}
function check() {
    var match = 0;
    console.log("length " + random.length);
    for (var i = 0; i < random.length; i++) {
        var val = spans[i];
        if (input == random.charAt(i)) {
            console.log('i ' + i);
            val.innerHTML = input;
            match = match + 1;
        }
    }
    return match;
}
var spans = [
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
