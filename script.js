// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //questions alerted to user to get parameters for password
  var upperQ = confirm("Would you like to use upper case letters?");
  var lowerQ = confirm("Would you like to use lower case letters?");
  var numbersQ = confirm("Would you like to use numbers?");
  var specialQ = confirm("Would you like to use special characters?");
  var rangeQ = prompt(
    "How many characters would you like your password to have? Please choose between 8 & 128."
  );

  //arrays of characters to be used in password
  var upperA = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerA = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var specialA = ["!", "@", "#", "$", "&", "*", "_", "%", "/", "+"];

  var i = 0;

  //Arrays of random answers
  var upperAnswer = [];
  var lowerAnswer = [];
  var numberAnswer = [];
  var specialAnswer = [];

  //must chose a type of character for the password maker to continue
  if (
    upperQ === !true &&
    lowerQ === !true &&
    numbersQ === !true &&
    specialQ === !true
  ) {
    alert("Please choose a character type");
    generatePassword();
  }

  if (rangeQ < 8 || rangeQ > 128) {
    alert("Please choose a length between 8 and 128 characters");
    generatePassword();
  }

  while (i < rangeQ) {
    // generate a random number for each array to use when choosing a character
    var numUpper = Math.floor(Math.random() * upperA.length);
    var numLower = Math.floor(Math.random() * lowerA.length);
    var number = Math.floor(Math.random() * 9);
    var numSpecial = Math.floor(Math.random() * specialA.length);

    if (upperQ) {
      console.log(upperA[numUpper]);
      var upperCase = upperA[numUpper];
      upperAnswer[i] = upperCase;
    }

    if (lowerQ) {
      console.log(lowerA[numLower]);
      var lowerCase = lowerA[numLower];
      lowerAnswer[i] = lowerCase;
    }

    if (numbersQ) {
      console.log(number);
      var numberCase = number;
      numberAnswer[i] = numberCase;
    }

    if (specialQ) {
      console.log(specialA[numSpecial]);
      var specialCase = specialA[numSpecial];
      specialAnswer[i] = specialCase;
    }

    i++;
  }

  var allAnswers = [];
  var finalAnswer = [];

  //adding answer arrays to allAnswers array
  if (upperAnswer.length > 1) {
    // allAnswers[i] = upperAnswer
    allAnswers.push(upperAnswer);
  }
  if (lowerAnswer.length > 1) {
    // allAnswers[i] = lowerAnswer
    allAnswers.push(lowerAnswer);
  }
  if (numberAnswer.length > 1) {
    // allAnswers[i] = numberAnswer
    allAnswers.push(numberAnswer);
  }
  if (specialAnswer.length > 1) {
    // allAnswers[i] = specialAnswer;
    allAnswers.push(specialAnswer);
  }

  console.log(allAnswers);
  final();

  function final() {
    for (var j = 0; j < rangeQ; j++) {
      var randNumb1 = Math.floor(Math.random() * allAnswers.length);
      var randNumb2 = Math.floor(Math.random() * rangeQ);
      if (randNumb1 < 0 || randNumb2 < 0) {
        final();
      }

      finalAnswer[j] = allAnswers[randNumb1][randNumb2];
    }
  }
  console.log(finalAnswer);
  return finalAnswer.join("");
}

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
