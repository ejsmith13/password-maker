// Assignment Code
var generateBtn = document.querySelector("#generate");

function askQuestions() {
  var upperQ = confirm("Would you like to use upper case letters?");
  var lowerQ = confirm("Would you like to use lower case letters?");
  var numbersQ = confirm("Would you like to use numbers?");
  var specialQ = confirm("Would you like to use special characters?");
  var rangeQ = prompt(
    "How many characters would you like your password to have?"
  );
  //questions alerted to user to get parameters for password

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
  var numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialA = ["!", "@", "#", "$", "&", "*", "_"];

  if (upperQ) {
    console.log("Uppercase");
  }
  for (var j = 0; j < 5; j++) {
    // Generate a random decimal number between 0 and 1

    var num = Math.floor(Math.random() * 26) + 1;

    
    console.log(upperA[num]);
  }

  writePassword();
}

function generatePassword() {
  for (var i = 0; i < 5; i++) {
    // Generate a random decimal number between 0 and 1

    var num = Math.floor(Math.random() * 10) + 1;

    // Display in console
    console.log(num);

    // console.log(upperA[num]);
  }
  return num;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", askQuestions);
