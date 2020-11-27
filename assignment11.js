var pass = "";
var encryptedPassword = "";

//encrypts digit that is inputed through the pad on screen
function addDigitToPassword(digitInput){
  pass += digitInput;
  var enteredPswd = document.getElementById("password");
  encryptedPassword += "*";
  enteredPswd.value = encryptedPassword;
}

//clears the password input field
function clearPassword() {
  var enteredPswd = document.getElementById("password");
  encryptedPassword = "";
  pass = "";
  enteredPswd.value = encryptedPassword;
}

//sends info to php to log into fitness app
function submitInfo() {
  //gets the user email in the form of a string
  var emailString = document.getElementById("email").value;

  //places email and password into a string to send to php as one variable
  //places space in between for easier substring later
  var submitString = emailString + " " + pass;
  console.log("Submit String:" + submitString);

  //sends user info to php and changes screen if correct user info
  var myXMLRequest = new XMLHttpRequest();
    myXMLRequest.onload = displayPHPResult;
    myXMLRequest.open("POST","assignment11c.php?submitString="+submitString, true);
    myXMLRequest.send();
}

//determines whehter to switch screen view of the user if php recognized the user from the data base
function displayPHPResult() {
  var data = this.responseText;
  if( data != "invalid"){
    var newLocation = "#welcomePage";
    window.location = newLocation;
  }
  //if user was not in Mysql database, send an alert info was not recognized
  else{
    alert("Sorry the information you entered is not a recognized user");
  }
}

//sends a request to php to add user info to the membership database
function addUser() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("newUserEmail").value;
  var password = document.getElementById("newUserPassword").value;

  //adds all info into one string to send to php
  //places space between info to make substrings easier later
  var addUserInfo = firstName + " " + lastName + " " + email + " " + password;
  console.log("newUserInfo: " + addUserInfo);

  //sends all info to php file dealing with adding user info to the system
  var myXMLRequest = new XMLHttpRequest();
    myXMLRequest.onload = returnloginScreen;
    myXMLRequest.open("POST","assignment11b.php?newUser="+addUserInfo, true);
    myXMLRequest.send();
}

//gets user input on what muscule group they want to train
//only have abdominals and legs in database for right now!!
function createActivities() {
  var muscleGroup = document.getElementById("muscleGroup").value;
  console.log("Muscle:"+muscleGroup);

  //sends user info to php file dealing with creating a table to output to the correct screen
  var myXMLRequest = new XMLHttpRequest();
    myXMLRequest.onload = createTableActivities;
    myXMLRequest.open("POST","assignment11.php?mg="+muscleGroup, true);
    myXMLRequest.send();
}

//outputs MySQL database info in the form of a table if user input a recognized primary key
function createTableActivities() {
  document.getElementById("activitiesList").innerHTML = this.responseText;
}

//switches screen to the sign up page
function signUp() {
  var newLocation = "#signUpPage";
  window.location = newLocation;
}

//switches screeen to the login screen
function loginScreen() {
  var newLocation = "#pageHome";
  window.location = newLocation;
}

//switches the screen to the login screen and alerts the user a new user has been added to the database
function returnloginScreen() {
  alert("New user has been added!");
  var newLocation = "#pageHome";
  window.location = newLocation;
}
