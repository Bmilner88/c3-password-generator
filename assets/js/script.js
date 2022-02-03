// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChars = ['!', '@', '$', '%', '^', '&', '*'];
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// getCharTypes() function
var getCharTypes = function() {
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
  return charTypes;
};

// generatePassword() function
var generatePassword = function() {
  var numOfChars = window.prompt('How many characters? (Must be at least 8 but no more than 128)')
  numOfChars = parseInt(numOfChars);
  // checking if input is a number and not below 8 or above 128
  if (isNaN(numOfChars)) {
    alert('Must be a number.');
    generatePassword();
  } else if (numOfChars < 8) {
    alert('Must be at least 8 characters long.');
    generatePassword();
  } else if (numOfChars > 128) {
    alert('Must not be longer than 128 characters.');
    generatePassword();
  };

  characters = getCharTypes();
  
  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
