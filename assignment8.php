<?php
  $q1Answer = "";
  $q2Answer = "";

  if(isset($_POST["submit"]))
  {
    $q1Answer = $_POST["q1"];
    $q2Answer = $_POST["q2"];
  }

  switch ($q1Answer) {
    case 'sofa':
      echo "(1) You answered incorrectly <br>";
      break;

    case 'genius':
      echo "(1) You answered correctly! <br>";
      break;

    case 'excercise':
      echo "(1) You answered incorrectly <br>";
      break;

    case 'three':
      echo "(1) You answered incorrectly <br>";
      break;

    default:
      echo "(1) You answered incorrectly <br>";
      break;
  }

  switch ($q2Answer) {
    case '07':
      echo "(2) You answered incorrectly <br>";
      break;

    case '21':
      echo "(2) You answered incorrectly <br>";
      break;

    case '27':
      echo "(2) You answered incorrectly <br>";
      break;

    case '14':
      echo "(2) You answered correctly! <br>";
      break;

    case '27':
      echo "(2) You answered incorrectly <br>";
      break;

    default:
      echo "(2) You answered incorrectly <br>";
      break;
  }
 ?>
