// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function askQuestions() {

  var confirmUpper = confirm("Would you like to use upper case letters?")
  var confirmLower = confirm("Would you like to use lower case letters?")
  var confirmNum = confirm("Would you like to use numbers?" )
  var confirmSpecial= confirm("Would you like to use special characters?")
  var promptLenght = prompt("How many characters would you like your password to have?")

  if (confirmUpper) {
    console.log("Uppercase");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, askQuestions);




