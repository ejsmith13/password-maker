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
  var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
  var specialArray = "!@#$%^&*()_+[/]~".split("");

  var i = 0;

  //arrays for random answers in each character group
  var upperAnswer = [];
  var lowerAnswer = [];
  var numberAnswer = [];
  var specialAnswer = [];

  //arrays for picking and storing the  final answers
  var allAnswers = [];
  var finalAnswer = [];

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


  //if user enters anything outside of the 8-128 character range,
  //the site will return message and stop sequence.
  if (rangeQ < 8 || rangeQ > 128) {
    return "Please choose a length between 8 and 128 characters"
    
  }

  //while statement runs as many times as the user enters in the prompt for number of characters in password.
  //this creates contents for each "character"Answer array and stores them in their respective array. 
  while (i < rangeQ) {
    // generate a random number for each array to use when choosing a character in each array
    var numUpper = Math.floor(Math.random() * upperArray.length);
    var numLower = Math.floor(Math.random() * lowerArray.length);
    var number = Math.floor(Math.random() * 9);
    var numSpecial = Math.floor(Math.random() * specialArray.length);

    //uses the random number from above as a index number to pick a character out of corresponding array
    if (upperQ) {
      console.log(upperArray[numUpper]);
      var upperCase = upperArray[numUpper];
      upperAnswer[i] = upperCase;
    }

    if (lowerQ) {
      console.log(lowerArray[numLower]);
      var lowerCase = lowerArray[numLower];
      lowerAnswer[i] = lowerCase;
    }

    if (numbersQ) {
      console.log(number);
      var numberCase = number;
      numberAnswer[i] = numberCase;
    }

    if (specialQ) {
      console.log(specialArray[numSpecial]);
      var specialCase = specialArray[numSpecial];
      specialAnswer[i] = specialCase;
    }

    //i++ increases i by one so it will loop until it reaches the user's chosen number 
    i++;
  }

  //adding "character"Answer arrays WITH CONTENT to allAnswers array
  if (upperAnswer.length > 1) {
    allAnswers.push(upperAnswer);
  }
  if (lowerAnswer.length > 1) {
    allAnswers.push(lowerAnswer);
  }
  if (numberAnswer.length > 1) {
    allAnswers.push(numberAnswer);
  }
  if (specialAnswer.length > 1) {
    allAnswers.push(specialAnswer);
  }


  //console log the allAnswers array to make sure everything is working correctly
  console.log(allAnswers);

  //call final function to create randomly generated finalAnswer array
  final();

  function final() {

    //for loop runs as many times as user's answer to prompt to create password with correct length
    for (var j = 0; j < rangeQ; j++) {

      //these two variables pick random number that correspond to answers in arrays
      //randNumb1 picks a number that will choose a "character"Answer array from allAnswers
      //randNumb2 picks a number that will choose a character from "character"Answer array above 
      var randNumb1 = Math.floor(Math.random() * allAnswers.length);
      var randNumb2 = Math.floor(Math.random() * rangeQ);
      
      //makes sure neither var above comes back as -1 which would return "undefined" in answer
      if (randNumb1 < 0 || randNumb2 < 0) {
        final();
      }

      //picks the final character and adds it to finalAnswer array
      //randNumb1 corresponds to a "character"Answer array, 
      //then randNumb2 picks a character in that "character"Answer array
      //this answer is then added to the final answer array in the index position that corresponds to 
      //the loop number that it was picked on
      finalAnswer[j] = allAnswers[randNumb1][randNumb2];
    }
  }

  //console.log final answer to make sure everything is running correctly
  console.log(finalAnswer);

  //return finalAnswer array as the answer the user sees
  //.join(" ") makes the answer return to the user without "," sepperating each answer, but a space inbetween
  return finalAnswer.join("");
}

//write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);
