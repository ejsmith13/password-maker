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
  // var numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialA = ["!", "@", "#", "$", "&", "*", "_"];

  //console log test of questions
  if (upperQ) {
    console.log("Uppercase");

    for (var j = 0; j < rangeQ; j++) {
      // Generate a random number between 0 and 26 to pull from upper array

      var num = Math.floor(Math.random() * 26);

      console.log(upperA[num]);
    }
  }

  for (var i = 0; i < rangeQ; i++) {
    // Generate a random number between 1 and 9

    var num2 = Math.floor(Math.random() * 9) + 1;

    // Display in console
    console.log(num2);

    // console.log(upperA[num]);
  }
  return upperA[num];
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
