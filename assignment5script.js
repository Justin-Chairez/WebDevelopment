var count = 1;
//chooses a door to begin with randomly between 1-3
var carDoor = Math.floor(Math.random()*3)+1;
//registers the button the user clicked on as a door
var choosenDoor = 0;
//registers the eliminteted door as to make sure it won't be rechoosen
var eliminatedDoor = 0;
//checks to see if user is replaying the game
var replay = 'n';

console.log("Car door: " + carDoor);

function playGame(clicked)
{
  //checks to see if user has clicked to replay the game
  if( count == 0 && replay == 'y' )
  {
    document.getElementById("door1Image").src="/Media/door1.png";
    document.getElementById("door2Image").src="/Media/door2.png";
    document.getElementById("door3Image").src="/Media/door3.png";
    count = count + 1;
  }
  //plays Monty Hall Game if user is reset is not required
  else
  {
    //registes the button clicked as the door opened
    choosenDoor = clicked;
    //button click 'counts' as one of the guess
    //user has two guesses to win the car
    count = count + 1
    //having count 2 is the user's first guess
    if( count == 2 )
    {
      eliminatedDoor = eliminate(carDoor,choosenDoor)
      return document.getElementById("output").innerHTML="You selected door " + choosenDoor +
      ".<br>Door " + eliminatedDoor + " does not have the car and has been removed." +
      "<br>Would you like to stay with your original door?" +
      "<br>Choose one of the two doors available.";

    }
    //having count 3 is the user's second guess
    //makes sure the user is not choosing an already opened door
    //here, the user either wins the car or looses the car
    if( count == 3 && eliminatedDoor != choosenDoor )
    {
      if( choosenDoor == carDoor )
      {
        var btnImage = "door" + clicked + "Image";
        win(btnImage);
        return document.getElementById("output").innerHTML= "Congrulations, you win a fabulous car!!" +
        "<br>Click one of the doors to play again";
      }
      else
      {
        var btnImage = "door" + clicked + "Image";
        lost(btnImage);
        return document.getElementById("output").innerHTML= "Sorry, you lost the car" +
        "<br>Click one of the doors to play again.";
      }
    }
    //alerts the user if an elimineted door is choosen
    if( count == 3 && eliminatedDoor == choosenDoor )
    {
      alert("Please choosen another door!")
      //decreases count so click on eliminated door won't count against the user
      count = count - 1;
    }
    //when user clicks any door again game is reset
    else
    {
      //replay is now true, allows for door images to be reset
      replay = 'y';
      count = 0;
      console.log("reset count: " + count);
      carDoor = Math.floor(Math.random()*3)+1;
      console.log("new door: " + carDoor);
      playGame(clicked);
    }
  }
}

//chooses a door that is has neither the car nor is the user's choice
function eliminate(carDoor,choosenDoor)
{
  var i;
  var blankDoor ="";
  for( i=1; i < 4; i++)
  {
    blankDoor = "door" + i + "Image";
    if( i != choosenDoor && i != carDoor)
    {
      document.getElementById(blankDoor).src="/Media/blankDoor.png";
      return i;
    }
  }
}

//changes the second user's guess to the lost car image
function lost(x)
{
  return document.getElementById(x).src="/Media/lostCar.png";
}
//changes the second user's guess to car image
function win(x)
{
  return document.getElementById(x).src="/Media/car.png";
}
