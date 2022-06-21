# Profile Page  

In this project we were given the html and css for a password generator website. What we had to do was
configure the button to generate a random password with specific types of characters the user would want.
We had to ask for multiple types of characters such as lower case, upper case, numbers and special characters. 

The user will be prompted to either enter ok to accept that type of character in their password or hit cancel to not have it in
their password. If they want a variety of characters and wants to mix and match them to fit their desire it 
allows the user to do that also. 

If the use it hit cancel when selecting a number between 8 and 128 the program stops and doesn't generate a new password.
This ensures that the user follows the rules of the code and is bound by the constrants of the number of characters.

After the user goes through the whole clicking process of deciding what they want in their password, a password with random
characters from their selected values will be generated and it will replace the text in the box with the new password.

## Authors

- [@marshallrizzuto](https://github.com/Zoot83)

Website: https://zoot83.github.io/Password_Generator/
## Features

- Javascript
- object creation
- Controlling Object variables
- Storing and referring to values
- Understanding Functions
- Function returned values



## Demo

![image](https://user-images.githubusercontent.com/105519029/174901022-b29dc05d-ec57-401a-9deb-f75a097647c9.png)

![image](https://user-images.githubusercontent.com/105519029/174901054-820c2019-9fb7-48f5-8176-a2f1001ba050.png)



## Usage/Examples

  I have included examples of code that will demonstrate the power of calling function to eliminate the amount of repeated code. This examples show that one
 function will be called multiple times with different values being passed into the functions parameters. This is also showing have the value of a function will be returned and used in another function elsewhere in the code.  

   password.hasLowerCase = confirm("Would you like to have lower case characters?");

  password.hasUpperCase = confirm("Would you like to have upper case characters?");

  password.hasNumeric = confirm("Would you like to have numeric characters?");

  password.hasSpecial = confirm("Would you like to have special characters?");
 

  return generateNewString(password.setLength);
```

This next section will demonsrate the use of classes and the vaiables associated with those classes to store values. This is needed in order to reuse this code 
if other characters were to be added later.

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
