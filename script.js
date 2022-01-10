// Assignment code here

//first error is that generatePassword is not defined, so define that here

var generatePassword = function() {

  // ask what length they want the password to be must be 8-128 char
  // ask about lowercase
  //ask about uppercase
  //ask about numeric
  // ask about special characters
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
