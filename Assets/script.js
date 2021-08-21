

var generateBtn = document.querySelector("#generate");
var randomUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomLowerCase = "abcdefghijklmnopqrstuvwxyz";
var randomNumber = "0123456789";
var randomSpecial = "<>?:{|}+_(*)&^%$#@!-=][\;'./,";

var randomCharacters = {
    randomUpperCase: getRandomUpper,

}

function getRandomUpper() {
  return randomUpperCase(Math.floor(Math.random()));
}
function getRandomLower() {
  return randomLowerCase(Math.floor(Math.random()));
}
function getRandomNumber() {
  return randomNumber(Math.floor(Math.random()));
}
function getRandomSpecial() {
  return randomSpecial(Math.floor(Math.random()));
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

if (password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
