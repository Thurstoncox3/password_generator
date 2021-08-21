

var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "#0123456789";
var specials = ("<>?:{|}+_(*)&^%$#@!-=][\;'./,");

var passwordText = document.getElementById ("password");
var length = document.getElementById ("length");
var length = 12;
var password = "";
var possible = "";

var stored = [];
var hasLowerCase = false;
var hasUpperCase = false;
var hasNumber = false;
var hasSpecials = false;

function generatePassword(){
    var length = 8;
    var password = "";

    hasLowerCase = confirm("Lower");
    hasUpperCase = confirm("Upper");
    hasNumber = confirm ("Number");
    hasSpecials = confirm ("Specials");


    if (letters){
    var random = Math.floor(Math.random () * letters.length);
    var selectedLetter = letters[random];
    stored.push(selectedLetter);
    possible = possible.concat(letters);
    };
    if (digits){
        var random = Math.floor(Math.random () * digits.length);
        var selectedDigit = digits[random];
        stored.push(selectedDigit);
        possible = possible.concat(digits);
    };
    if (specials){
        var random = Math.floor(Math.random () * specials.length);
        var selectedSpecial = specials[random];
        stored.push(selectedSpecial);
        possible = possible.concat(specials);
    };

    for (i = 0; i < length; i++) {
        var random = letters(Math.floor(Math.random() * letters.length));
        password += letters[random];
    }

    console.log(stored);
    console.log(password);
    console.log(possible);
    return password;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("#password");

if (password) {
  passwordText.value = password;
  }
};

generateBtn.addEventListener("click", writePassword);
