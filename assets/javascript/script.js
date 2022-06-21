// Assignment Code
var generateBtn = document.querySelector("#generate");

//This shows all the possible characters that could be included
var included = {
  lowerCharacters: "abcdefghijklmnopqrstuvwxyz",
  upperCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberCharacters: "0123456789",
  specialCharacters: "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"
}

//This is a class for the password.
var password={
  setLength: 0,
  hasLowerCase: false,
  hasUpperCase: false,
  hasNumeric: false,
  hasSpecial: false,
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password === null)
  {
    return;
  }
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//This finds all the possible characters for the password
function includedChars(){
 var possibleChars = "";
 if(password.hasLowerCase){
  possibleChars = possibleChars + included.lowerCharacters;
 }
 if(password.hasUpperCase){
  possibleChars = possibleChars + included.upperCharacters;
 }
 if(password.hasNumeric){
  possibleChars = possibleChars + included.numberCharacters;
 }
 if(password.hasSpecial){
  possibleChars = possibleChars + included.specialCharacters;
 }
  return possibleChars;
}

//This is generating the new string of characters for the password
function generateNewString(length){
  var result = "";
  var characterIncluded = includedChars();
  for(var i = 0; i< password.setLength; i++){
    result += characterIncluded.charAt(Math.floor(Math.random() * characterIncluded.length));
  } 
  return result; 
}

//This is the main function that will be called to generate a new password
function generatePassword(){
  var validChoice = false;

  

  //This is making sure the user puts in a valid length betwwen 8 and 128
  while(validChoice=== false)
  {
    var usersChoice = window.prompt("Your password must be between 8 and 128 charcters. How long would you like to make it?");
    // If user selects cancel on this it will end the prompt
    if (!usersChoice) {
      return null;
    }
    if(usersChoice < 129 && usersChoice > 7){
      validChoice = true;
    } else if(isNaN(usersChoice)){
      validChoice = false;
    } else if (usersChoice === null){
      return null;
    }
  }
  
  //Assigns the length to the password
  password.setLength = usersChoice;
  
  //This finds out what the user would like to have in the password
  password.hasLowerCase = confirm("Would you like to have lower case characters?");
  password.hasUpperCase = confirm("Would you like to have upper case characters?");
  password.hasNumeric = confirm("Would you like to have numeric characters?");
  password.hasSpecial = confirm("Would you like to have special characters?");
 

  return generateNewString(password.setLength);
}

