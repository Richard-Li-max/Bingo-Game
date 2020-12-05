var number = document.getElementById("number");
var squares = document.getElementsByClassName("square");
var nextNum = document.getElementById("next");

var currentNum = 0;
var numbers = [];
var pickedNumbers = [];
var clickedSquares = [];

for (var i = 0; i < squares.length; i++) {
  var addNum = randomInt(1, 50);
  while (checkArray(addNum, numbers)) {
    addNum = randomInt(1, 50);
  }
  numbers.push(addNum);
  squares[i].innerHTML = addNum;
}

// Display random number
pickRandNum();
nextNum.onclick = nextNumButton;

// Call clicksquare function
for (var i=0; i < squares.length; i++) {
  squares[i].onclick = clickSquare();
}

// function for clicking on square
function clickSquare() {
  if (parseInt(this.innerHTML) == currentNum) {
    this.style.backgroundColor = "yellow";
    clickedSquares.push(this.id);
    console.log(clickedSquares);
    checkWin();
    pickRandNum();
  }
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkArray(n, a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] == n) {  
      return true;
    }
  }
  return false;
} 