<<<<<<< HEAD
var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  var button = document.getElementById('button');
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  }
=======
var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  var button = document.getElementById('button');
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  }
>>>>>>> 2cd12ab19e3ee0aa1c808e37eee61c3aa45f8050
  