// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChars = ['!', '@', '$', '%', '^', '&', '*'];
var letters = [ 'a', 'A',
                'b', 'B', 
                'c', 'C', 
                'd', 'D', 
                'e', 'E', 
                'f', 'F', 
                'g', 'G', 
                'h', 'H', 
                'i', 'I', 
                'j', 'J', 
                'k', 'K', 
                'l', 'L', 
                'm', 'M', 
                'n', 'N', 
                'o', 'O', 
                'p', 'P', 
                'q', 'Q', 
                'r', 'R', 
                's', 'S', 
                't', 'T', 
                'u', 'U', 
                'v', 'V', 
                'w', 'W', 
                'x', 'X', 
                'y', 'Y', 
                'z', 'Z', ]

// generatePassword() function


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
