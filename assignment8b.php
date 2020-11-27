<?php
  $binaryNumber = "";

  if(isset($_POST["submit"]))
  {
    $number = $_POST["n"];
  }

  while ($number > 0)
  {
    $remainder = $number%2;
    $binaryNumber .=  $remainder;
    $number = floor($number/2);
  }

  echo "The binary number is: " . strrev($binaryNumber);

?>
