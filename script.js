// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //questions alerted to user to get parameters for password
  var upperQ = confirm("Would you like to use upper case letters?");
  var lowerQ = confirm("Would you like to use lower case letters?");
  var numbersQ = confirm("Would you like to use numbers?");
  var specialQ = confirm("Would you like to use special characters?");
  var rangeQ = prompt(
    "How many characters would you like your password to have?"
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
  var specialA = ["!", "@", "#", "$", "&", "*", "_"];

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

  while (i < rangeQ) {
    // generate a random number between 0 and 26 to pull from upper array
    var numUpper = Math.floor(Math.random() * 26)+1;
    // generate a random number between 1 and 26 to pull from lower array
    var numLower = Math.floor(Math.random() * 26) + 1;
    // generate a random number between 1 and 9 for numbers
    var number = Math.floor(Math.random() * 9) + 1;
    // generate a random number between 1 and 6 for special characters
    var numSpecial = Math.floor(Math.random() * 6) + 1;

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

  var allAnswers = [upperAnswer, lowerAnswer, numberAnswer, specialAnswer]
  var finalAnswer = []
  
  for (i = 0; i < rangeQ; i++){
    var randNumb1 = Math.floor(Math.random() * 4);
    var randNumb2 = Math.floor(Math.random() * rangeQ) + 1;
    finalAnswer[i] = allAnswers[randNumb1][randNumb2];

    

  }
  return finalAnswer
}

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
