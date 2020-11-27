<?php
 //gets the term the user selected from the user
  $term = $_REQUEST[ts];

  //creates an array to store the lines that are in the category of the term
  $termsArray = array();
  $termsArray[] = array("","","");
  $termsArray[] = array("","","");
  $termsArray[] = array("","","");
  $termsArray[] = array("","","");
  $termsArray[] = array("","","");

  //opens the txt file with the information
  $culinaryFile = fopen('assign11.txt','r');
  $row = 0;

  //while we have not reached the end, read each line
  while(! feof($culinaryFile))
  {
    $culinaryTermsLine = fgets($culinaryFile);
    //if the line has the term in it, place it into the array
    //breaks the string into substrings based on name,category,and defintion
    if(strpos($culinaryTermsLine,$term))
    {
      $termIndex = stripos($culinaryTermsLine,$term);
      $name = trim(substr($culinaryTermsLine,0,$termIndex-1));

      $startIndex = stripos($culinaryTermsLine,$term);
      $endIndex = strlen($term);
      $category = trim(substr($culinaryTermsLine,$startIndex,$endIndex));

      $defIndex = stripos($culinaryTermsLine,$term)+strlen($term);
      $def = trim(substr($culinaryTermsLine,$defIndex));

      //for each line, place it into a row; in each row's column place the name,category,and def
      for($col=0;$col<3;$col++)
      {
        if($col == 0)
        {
          $termsArray[$row][$col] = $name;
        }
        else if($col == 1)
        {
          $termsArray[$row][$col] = $category;
        }
        else
        {
          $termsArray[$row][$col] = $def;
        }
      }
      $row++;
    }
  }
  
  //close the file once everything has been executed
  fclose($culinaryFile);

  //shuffle the array to create randomness
  shuffle($termsArray);

  //pull the term from the first row and related defintion & category
  $item = $termsArray[0][0];
  $category = $termsArray[0][1];
  $itemDef = $termsArray[0][2];

  //pulls the new two row's defintions to use for other options
  $randDef1 = $termsArray[1][2];
  $randDef2 = $termsArray[2][2];

  //pass info back to JS using a JSON object
  $jsonObject = array(
    "item" => $item,
    "category" => $category,
    "itemdef" => $itemDef,
    "randDef1" => $randDef1,
    "randDef2" => $randDef2
  );

  header("Content-type: application/json");
  print(json_encode($jsonObject));
 ?>
