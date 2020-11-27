<?php

$booksArray = array("www.electricliterature.com","www.goodreads.com","www.lithub.com");

$computersArray = array("www.intel.com","www.apple.com","www.microsoft.com");

$musicArray = array("www.itunes.com","www.sparks.com","www.kiss.com");


if(isset($_POST["submit"]))
{
  $username = $_POST["name"];
  $email = $_POST["email"];
  $websiteChoice = $_POST["Websites"];
}

echo "Hello " . $username . ",<br><br>";

if(!filter_var($email, FILTER_VALIDATE_EMAIL))
{
  echo "It appears that you have not entered a valid email address: " . $email . "<br>";
}

else
{
  echo "Thank you for supplying a valid email address: " . $email . "<br>";
}

echo "Here is a list of " . $websiteChoice . " websites that might be of interest to you!<br><br>";

switch ($websiteChoice) {
  case 'book':
    for($x = 0; $x <= count($booksArray); $x++)
    {
      echo $booksArray[$x] . "<br>";
    }
    break;

  case 'computer':
    for($x = 0; $x <= count($computersArray); $x++)
    {
      echo $computersArray[$x] . "<br>";
    }
    break;

  case 'music':
    for($x = 0; $x <= count($musicArray); $x++)
    {
      echo $musicArray[$x] . "<br>";
    }
    break;

  default:
    echo "Please select a choice!";
    break;
}

?>
