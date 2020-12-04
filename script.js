// Assignment Code
var generateBtn = document.querySelector("#generate");

function askQuestions() {
  var upper = confirm("Would you like to use upper case letters?");
  var lower = confirm("Would you like to use lower case letters?");
  var numbers = confirm("Would you like to use numbers?");
  var special = confirm("Would you like to use special characters?");
  var range = prompt(
    "How many characters would you like your password to have?"
  );

  if (upper) {
    console.log("Uppercase");
  }

  writePassword();
}

function generatePassword() {
  for (var i = 0; i < 5; i++) {
    // Generate a random decimal number between 0 and 1

    var num = Math.floor(Math.random() * 10) + 1;

    // Display in console
    console.log(num);

    
  }
  return (num); 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", askQuestions);
