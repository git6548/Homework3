// Assignment code here

//first error is that generatePassword is not defined, so define that here

var generatePassword = function () {
  // ask what length they want the password to be must be 8-128 char
  var passwordLength = window.prompt("How long would you like your password to be?");
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must be between 8 and 128 characters, resubmit password length")
    generatePassword();
  }
  else {
    // ask about lowercase
    var passwordLowerCase = window.confirm("Do you want your password to contain lowercase?")
    //ask about uppercase
    var passwordUpperCase = window.confirm("Do you want your password to contain uppercase?")
    //ask about numeric
    var passwordNumeric = window.confirm("Do you want your password to contain numeric values?")
    // ask about special characters
    var passwordSpecialChar = window.confirm("Do you want your password to contain special characters?")

    //define each of the types of password components
    var password = "";
    if (passwordLowerCase===true) {
      var lowerCase = "abcdefghijklmnopqrstuvwxyz"}
      else{
      lowerCase = ""
    }
    if (passwordUpperCase ===true) {
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
      else {
        upperCase = ""
      }
    if (passwordNumeric === true) {
      var numeric = "0123456789"
    }
    else {
      numeric = ""
    }

    if (passwordSpecialChar === true) {
      var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    else {
      specialChar = ""
    }

    var totalChar = upperCase + lowerCase + numeric + specialChar

    for (var i = 0; i < passwordLength; i++) {
    var passwordGenerated = passwordGenerated + totalChar.charAt(Math.floor(Math.random() * totalChar.length));
   }

    //console.log(passwordLength);
    //console.log(passwordLowerCase);
    //console.log(passwordUpperCase);
    // console.log(passwordNumeric);
    // console.log(passwordSpecialChar);
    // console.log(totalChar);
    // console.log(password);
  }
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

