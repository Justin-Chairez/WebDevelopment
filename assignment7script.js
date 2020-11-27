//completely random array of words for he carray to choose from
wordsArray = ["punishment","foamy","pump","mammoth","exultant","curve","heavenly",
"tail","thoughtful","ray","learn","bedroom","pick","collect","earsplitting","cellar"
,"worthless","pet","heat","steep"];

//special character array for the advanced mode
specialArray = ["!","@","$","%","&","*","-","/"];

//registers the mode for choosing from arrays
var textMode = ""

//initalizes timer variables
var beginingTime;
var endindingTime;

//initalizes and declares an empty line of text to give the user
var textLine = "";

//returns whether the user has choosen the advanced or beginner mode
function textLevel(mode)
{
  textMode = mode;
  console.log(textMode);
  return textMode;
}

//compares the text generated and the text the user inputed
function checkText()
{
  //stops the timer
  endindingTime = endTime();

  //takes out any blank spaces from the end and start of the generated text
  opText = textLine.trim();
  console.log("Optext: " + opText);

  //gets the user inputed text and takes off any blank space at start and front
  var userInput = (document.getElementById("userText").value).trim();
  console.log("user input: " + userInput);

  //checks if text are the same and tells user if they are
  if( opText == userInput )
  {
    document.getElementById("imageResult").innerHTML = "<img src='/Media/smiley2.jpg'>";
    document.getElementById("testResult").innerHTML = "Good job!! You typed the correct text." +
    "<br> It took you " + timeDiff(beginingTime,endindingTime);
  }
  else
  {
    document.getElementById("imageResult").innerHTML = "<img src='/Media/upsetSmiley.png'>";
    document.getElementById("testResult").innerHTML = "Sorry, you entered the wrong text." +
    "<br>You typed - " + userInput +
    "<br>You should have typed - " + opText;
  }
}

// function timerTest()
// {
//   endindingTime = endTime();
//   console.log("ending time: " + endindingTime);
//   console.log(timeDiff(beginingTime,endindingTime));
// }

//generates a random line of text depending on the mode choosen
function generateText()
{
  //clears any previous results
  document.getElementById("imageResult").innerHTML = "";
  document.getElementById("testResult").innerHTML = "";

  //begins the timer for how long the user took to type the texts
  beginingTime = startTimer();
  console.log("start: " + beginingTime);
  textLine = "";

  //generates a random length for the text line
  textLength = Math.floor((Math.random()*15)+2);
  var i;

  //if advanced mode is choosen, choose randomly from the two arrays avaliable
  if( textMode == "advanced" )
  {
    for( i = 0; i < textLength; i++)
    {
      var randomWord = Math.floor(Math.random()*2);
      if( randomWord == 0 )
      {
        textLine += " " + wordsArray[(Math.floor(Math.random()*20))];
      }
      else
      {
        textLine += " " + specialArray[(Math.floor(Math.random()*8))];
      }
    }
  }

  //else just choose words from the words array
  else
  {
    for( i = 0; i < textLength; i++)
    {
      textLine += " " + wordsArray[(Math.floor(Math.random()*20))];
    }
  }
  console.log(textLine);
  document.getElementById("outputText").innerHTML = textLine;
  return textLine;
}

function startTimer()
{
  return Date.now();
}

function endTime()
{
  return Date.now();
}


//generates the the time taken, formatted as a string
function timeDiff(s,e)
{
  var timeString = "";
  var time = e - s;

  //takes out any hours from the time and passes remainder
  var hourPlaceHolder = time/3600000;
  var hour = Math.floor(hourPlaceHolder);

  //takes out any minutes from the time and passes remainder
  var minPlaceHolder = (hourPlaceHolder-hour)*60;
  var min = Math.floor(minPlaceHolder);

  //formates remaining time as seconds
  var secPlaceHolder = (minPlaceHolder-min)*60;
  var sec = Math.floor(secPlaceHolder);

  //checks if time to see which format to display
  //returns formatted time as string
  if(hour>0)
  {
    return timeString = hour + " hour, " + min + " minutes and " + sec + " seconds";
  }
  if( hour == 0 && min > 0)
  {
    return timeString = min + " minutes and " + sec + " seconds";
  }
  else
  {
    return timeString = sec + " seconds"
  }
}
