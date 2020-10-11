
//Global variable decloration
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


//Generate password function
function generatePassword() {
  //Promt asking user to input a value
  var passwordLength = prompt("How many characters would you want your password to be? Please choose between 8 and 128 characters.");
  console.log(passwordLength); 
  //If statement checking valid user input and an alert if user input is invalid
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Please enter a number between 8 and 128.");
    return'';
  } 
  //Local variable decloration
  var confirmNum = confirm("Do you want numbers in your password?");
  var confirmLowerCase = confirm("Do you want lowercase characters in your password?");
  var confirmUpperCase = confirm("Do you want uppercase characters in your password?");
  var confirmSpecChar = confirm("Do you want special characters in your password?");

  //If/Else statements with confirms asking user to select what character types they want in their password.
  //Empty array concatination, building the new array that the for loop will use to select a randomized password.
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

  //If statement that prompts an alert if the user does not select any character types
  if (confirmUpperCase === false && confirmLowerCase === false && confirmNum === false && confirmSpecChar === false) {
    alert("Please select at least one character type");
    return('');
  }

  //Varaible that makes the new concatenated array into a string
  var passFourString = passFour.toString();
  //Variable to remove any commas so extra don't get randomly selected
  var passFourStringWithoutCommas = passFourString.replace(/,/g, '');
  console.log("no comma string", passFourStringWithoutCommas);
  console.log("final result", passFourString);
  var result = "";

  //For loop for password randimzation
  for (var i = 0; i < passwordLength; i++) {
    var random = passFourString.charAt(Math.floor(Math.random() * passFourString.length));
    console.log(passFourString.length);
    console.log("random", random);
    console.log("index", i)
    var result = random.concat(result);

  }
  //calling the function
  return result;

}

//generatePassword ();

//Click event
generateBtn.addEventListener("click", writePassword);



