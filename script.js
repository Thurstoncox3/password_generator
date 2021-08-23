const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol,
};
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower= lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  resultEl.innerText = generatePassword(
    hasLower, hasNumber, hasUpper, hasSymbol);
  

  console.log(hasLower, hasNumber, hasUpper, hasSymbol);

});

function generatePassword(lower, upper, number, symbol, length){
  let generatedPassword = "";

  const typesCount = lower + upper + number + symbolsEl;
  console.log ("typlesCount:", typesCount);
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]);

  if(typesCount === 0){
    return "";
  }
  for(let i = 0; i < length; i += typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log("funcName: ", funcName)
      generatedPassword += randomeFunc[funcName]();
    })
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
  
}
var generateBtn = document.querySelector("#generate");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};
function getRandomSymbol() {
  const symbol = "!@#$%^&*()_+}|{[\]\;'.?,";
  return symbol [Math.floor(Math.random() * symbol.length)]
};

console.log(getRandomNumber);
console.log(getRandomLower);
console.log(getRandomUpper);




