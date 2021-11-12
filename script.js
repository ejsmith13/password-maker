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
  const typedArray = new Int8Array(1);

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
  let allAnswers = [];
  let finalAnswer = [];

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
  if (rangeQ < 8 || rangeQ > 128 || isNaN(rangeQ) === true) {
    return "Please choose a length between 8 and 128 characters";
  }

  //while statement runs as many times as the user enters in the prompt for number of characters in password.
  //this creates contents for each "character"Answer array and stores them in their respective array.
  while (i < rangeQ) {
    let rando = crypto.getRandomValues(typedArray);
    if (rando < 0) {
      rando *= -1;
    }
    // generate a random number for each array to use when choosing a character in each array
    console.log(`typed array: ${typedArray}`);
    var numUpper = Math.floor(
      (+rando < 100 ? rando * 0.01 : rando * 0.001) * upperArray.length
    );
    var numLower = Math.floor(
      (+rando < 100 ? rando * 0.01 : rando * 0.001) * lowerArray.length
    );
    var number = Math.floor((+rando < 100 ? rando * 0.01 : rando * 0.001) * 9);
    var numSpecial = Math.floor(
      (+rando < 100 ? rando * 0.01 : rando * 0.001) * specialArray.length
    );

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
    for (let j = 0; j < upperAnswer.length; j++) {
      allAnswers.push(upperAnswer[j]);
    }
  }
  if (lowerAnswer.length > 1) {
    for (let k = 0; k < lowerAnswer.length; k++) {
      allAnswers.push(lowerAnswer[k]);
    }
  }
  if (numberAnswer.length > 1) {
    for (let l = 0; l < numberAnswer.length; l++) {
      allAnswers.push(numberAnswer[l]);
    }
  }
  if (specialAnswer.length > 1) {
    for (let m = 0; m < specialAnswer.length; m++) {
      allAnswers.push(specialAnswer[m]);
    }
  }

  //console log the allAnswers array to make sure everything is working correctly
  console.log(`allanswers: ${allAnswers}`);

  //call final function to create randomly generated finalAnswer array
  final();

  function final() {
    //for loop runs as many times as user's answer to prompt to create password with correct length
    for (var n = 0; n < rangeQ; n++) {
      let answerKey = crypto.getRandomValues(typedArray);
      if (answerKey < 0) {
        answerKey *= -1;
      }
      answerKey < 100 ? (answerKey *= 0.01) : (answerKey *= 0.001);
      //these two variables pick random number that correspond to answers in arrays
      //randNumb1 picks a number that will choose a "character"Answer array from allAnswers
      var randNumb1 = Math.floor(answerKey * allAnswers.length);

      console.log(`all answers: ${allAnswers}`);
      console.log(`all anwers length: ${allAnswers.length}`);
      console.log(`rand1: ${randNumb1}`);
      console.log(answerKey);

      //makes sure neither var above comes back as -1 which would return "undefined" in answer
      if (randNumb1 < 0) {
        final();
      }

      //picks the final character and adds it to finalAnswer array
      //randNumb1 corresponds to a "character"Answer array,
      //then randNumb2 picks a character in that "character"Answer array
      //this answer is then added to the final answer array in the index position that corresponds to
      //the loop number that it was picked on
      finalAnswer[n] = allAnswers[randNumb1];
    }
  }

  //console.log final answer to make sure everything is running correctly

  console.log(finalAnswer);

  //return finalAnswer array as the answer the user sees
  //.join("") makes the answer return to the user without a comma sepperating each answer
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
