
// creat button variable to represent <button> element on html code
var generateBtn = document.querySelector("#generate");

// Write password to the #password text box
function writePassword() {

  //return the generated password string to 'password' varibale
  var password = generatePassword(lowerChoice, upperChoice, numChoice, specChoice, length);
  var passwordText = document.querySelector("#password");

  // dynamically update the value of #password text box in webpage 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// store all randoming functions in an object, awaiting to be called upon
const randomValue = {
  hasLower: getRandomLower,
  hasUpper: getRandomUpper,
  hasNum: getRandomNum,
  hasSymbol: getRandomSymbol
};


// functions generating random values for each character types
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}

function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}

// locate each character of the string[] array by referring to its index
function getRandomSymbol() {
  const symbols = '!#$%&(),*+-/.:;<=>?@[]^_{}|~'
  return symbols[Math.floor(Math.random()* symbols.length)];
}

// prompt user for password length and check for length requirement
var lengthChoice = window.prompt("Length of Password (8 to 128 characters): ");
var length = +lengthChoice;

while (+lengthChoice<8 || +lengthChoice>128) {
  alert("Password must be between 8 and 128 characters long");
  var lengthChoice = window.prompt("Length of Password (8 to 128 characters): ");
  var length = +lengthChoice;
}


// prompt user for password criteria and check for at least one character type
var lowerChoice = window.confirm("Contains Lowercase Character or not? "); 
var upperChoice = window.confirm("Contains Uppercase Character or not? ");
var numChoice = window.confirm("Contains numeric or not? "); 
var specChoice = window.confirm("Contains Special Character or not? "); 
var selectCount = lowerChoice + upperChoice + numChoice + specChoice;

while (selectCount === 0){
  alert('Please select at least one character type in your password');
  var lowerChoice = window.confirm("Contains Lowercase Character or not? "); 
  var upperChoice = window.confirm("Contains Uppercase Character or not? ");
  var numChoice = window.confirm("Contains numeric or not? "); 
  var specChoice = window.confirm("Contains Special Character or not? "); 
  selectCount = lowerChoice + upperChoice + numChoice + specChoice;
}


// Define Password generating function with 5 parameters from user input
function generatePassword(hasLower, hasUpper, hasNum, hasSymbol, length) {

  var generatedPW = '';
  const typeCount = hasLower + hasUpper + hasNum + hasSymbol; 

  
  // Create array of objects storing the selected character types
  // loop over the array, filter out the object having a 'false' value from the array
  const typeArray = [{hasLower}, {hasUpper}, {hasNum}, {hasSymbol}].filter(
    item => Object.values(item)[0]    
  );
  
console.log('type Array:', typeArray);
 

  // for loop by the length and increment i by the count of character type
  for(var i=0; i<length; i+=typeCount) {
  
  // for each object in typeArray, extract the key of each object using 'forEach' array method, 
  // store the key in 'valueName' as string
    typeArray.forEach(type => {
      var valueName = Object.keys(type)[0];
      console.log('valueName=', valueName);

     
   // call randoming function in 'randomValue' object and pass the key parameter into the function, 
   // generating one random character at a time
      generatedPW += randomValue[valueName]();

    });
  }
  // slice the generatedPW upto its length to remove redundant character if any
  console.log(typeof generatedPW.slice(0, length));
  return generatedPW.slice(0, length);

}
