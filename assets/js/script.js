// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = ['!', '@', '#', '$', '%', '^', '&', '*',  '/', '<', '>', '~'],
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var randoNum = function(max) {
  var value = Math.floor(Math.random() * max);
  return value;
};

var shufflePass = function(array) {
  for (i = array.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
};

// generatePassword() function
var generatePassword = function() {
  var genPass = [];
  var numOfChars = parseInt(window.prompt('How many characters? Must be at least 8 but no more than 128'));
  // checking if input is a number and not below 8 or above 128
  if (isNaN(numOfChars)) {
    window.alert('Must be a number!');
    return generatePassword();
  } 
  else if (numOfChars < 8 || numOfChars > 128) {
    window.alert('Must be between 8 and 128 characters')
    return generatePassword();
  };
  
  var charTypes = {
    special: window.confirm('Would you like to use special characters?'),
    numeric: window.confirm('Would you like to use numeric characters?'),
    lowercase: window.confirm('Would you like to use lower-case characters?'),
    uppercase: window.confirm('Would you like to use upper-case characters?')
  };

  if(!charTypes.special && !charTypes.numeric && !charTypes.lowercase && !charTypes.uppercase) {
    window.alert('You must have at least 1 type!')
    return getCharTypes();
  };
  
  var combineCharacters = function() {
/*     var charTypes = getCharTypes(); */
    var tempChars = [];
  
    if (charTypes.special) {
      for (i = 0; i < special.length; i++) {
        tempChars.push(special[i])
      };
    };
  
    if (charTypes.numeric) {
      for (i = 0; i < numbers.length; i++) {
        tempChars.push(numbers[i])
      };
    };
  
    if (charTypes.lowercase) {
      for (i = 0; i < lowerLetters.length; i++) {
        tempChars.push(lowerLetters[i])
      };
    };
  
    if (charTypes.uppercase) {
      for (i = 0; i < upperLetters.length; i++) {
        tempChars.push(upperLetters[i])
      };
    };
    return tempChars;
  };
  
  var allCharacters = combineCharacters();
  console.log(allCharacters);

  debugger;
  for(i = 0; i < numOfChars; i++) {  
      temp = randoNum(allCharacters.length - 1);
      genPass.push(allCharacters[temp]);
  };
  console.log(genPass);
  return genPass;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join('');
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);