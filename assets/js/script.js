// Assignment Code
var generateBtn = document.querySelector("#generate");

// getCharTypes() function
var getCharTypes = function() {
  var tempChars = [];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*',  '/', '<', '>', '~'];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var charTypes = {
    special: window.confirm('Would you like to use special characters?'),
    numeric: window.confirm('Would you like to use numeric characters?'),
    lowercase: window.confirm('Would you like to use lower-case characters?'),
    uppercase: window.confirm('Would you like to use upper-case characters?')
  };

  if(!charTypes.special && !charTypes.numeric && !charTypes.lowercase && !charTypes.uppercase) {
    window.alert('You must have at least 1 type!')
    getCharTypes();
  };

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

var randoNum = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// generatePassword() function
var generatePassword = function() {
  var genPass = [];
  var charTypes;
  var numOfChars = parseInt(window.prompt('How many characters? (Must be at least 8 but no more than 128)'));
  // checking if input is a number and not below 8 or above 128
  if (isNaN(numOfChars)) {
    window.alert('Must be a number!');
    return generatePassword();
  } else if (numOfChars < 8 || numOfChars > 128) {
    window.alert('Must be between 8 and 128 characters')
    return generatePassword();
  };
  
  // get the character types
  var charTypes = getCharTypes();
  console.log(charTypes)

  if (numOfChars >= 10 && charTypes.special) {
    console.log("test");
  }

  for(i = 0; i < numOfChars; i++) {
    temp = randoNum(1, charTypes.length);
    genPass.push(charTypes[temp]);
  };

  /* if (!genPass.includes('')) */
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