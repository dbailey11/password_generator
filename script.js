// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var upperCase = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var lowerCase =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var number = ["1,2,3,4,5,6,7,8,9,0"];
// var specChr = ["!", "@", "#", "$", "&"];
// var passwordChr = [];

var generateBtn = document.querySelector("#generate");
var upperCase = ["abcdefghizjklmnopqrstuvwxyz"];
var lowerCase =  ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var number = ["0123456789"];
var specChr = ["!#$%& '()*+-.,/:;<=>?@[]^_`{|}~"];
var passwordChr = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
passwordText.value = password;
}


//fucntion to generate password
function generatePassword() {
  var passwordLength = prompt("How many characters would you want your password to be? Please choose between 8 and 128 characters.");
  console.log(passwordLength); 

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Please enter a number between 8 and 128.");
    return'';
  } 

  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmLowerCase = confirm("Do you want lowercase characters in your password?");
  var confirmUpperCase = confirm("Do you want uppercase characters in your password?");
  var confirmSpecChar = confirm("Do you want special characters in your password?");

  if (confirmUpperCase === true) { 
    var passOne = passwordChr.concat(upperCase);
    console.log("upperCase logic", upperCase);
  } else {
    var passOne = passwordChr.concat();
  }

  if (confirmLowerCase === true) {
    var passTwo = passOne.concat(lowerCase);
    console.log("lowerCase logic", lowerCase);
  } else {
    var passTwo = passOne.concat();
  }
  
  if (confirmNum === true) {
    var passThree = passTwo.concat(number);
    console.log("number", passThree);
  } else {
    var passThree = passTwo.concat();
  }

  if (confirmSpecChar === true) {
    var passFour = passThree.concat(specChr);
    console.log("specchar", passFour);
  } else {
    var passFour = passThree.concat();
  }

  
  if (confirmUpperCase === false && confirmLowerCase === false && confirmNum === false && confirmSpecChar === false) {
    alert("Please select at least one character type");
    return('');
  }

  //var passResult = passFour.concat(passResult);
  var passFourString = passFour.toString();
  //var passFourString = passFour();
  var passFourStringWithoutCommas = passFourString.replace(/,/g, '');
  console.log("no comma string", passFourStringWithoutCommas);

  console.log("final result", passFourString);
  var result = "";

  for (var i = 0; i < passwordLength; i++) {
    var random = passFourString.charAt(Math.floor(Math.random() * passFourString.length));
    console.log(passFourString.length);
    console.log("random", random);
    console.log("index", i)
    var result = random.concat(result);

  }

  return result;

}

//generatePassword ();


generateBtn.addEventListener("click", writePassword);







//randomization of characters selected 
  // var randomNumber = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z, A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z, 1,2,3,4,5,6,7,8,9,0, !, @, #, $. &"]
 
  // var possibleCharacters = "abcdefghijklmnoprstuvwxyz0123456789"
  // var randomNumber = Math.floor(Math.random() * possibleCharacters.length);
  // var randomCharacter = possibleCharacters[randomNumber]
  // console.log(possibleCharacters);
  // return passwordText.value;



//run function


// Add event listener to generate button