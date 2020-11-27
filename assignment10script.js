
function printTerms()
{
  //assigns the selected term from the user
  var term = document.getElementById("categories");
  var ts = term.options[term.selectedIndex].text;
  ts = ts.trim();
  console.log("ts:" + ts);

  //creates a POST request to php that sends the selected term
  var myXMLRequest = new XMLHttpRequest();
  //once call is executed the displayPHPresults function is called
  myXMLRequest.onload = displayPHPresults;
  myXMLRequest.open("POST","assignment10.php?ts="+ts,true);
  myXMLRequest.send();
}

//displays the quiz from the user's selected term
function displayPHPresults()
{
  var json = JSON.parse(this.responseText);
  console.log("name:" + json.item);
  console.log("category:" + json.category);
  console.log("def:" + json.itemdef);
  console.log("ran def 1:" + json.randDef1);
  console.log("ran def 2:" + json.randDef2);

  //places the buttons with associted random term and defintions
  document.getElementById("outputQuestion").innerHTML = "What answer best applies to the " + json.category + " : " + json.item;
  document.getElementById("questionButtons").innerHTML = "<button id=\"1\" onclick = \"answerFunction(this.id)\">" + json.randDef1 + "</button><br>" +
                                                         "<button id=\"2\" onclick = \"answerFunction(this.id)\">" + json.itemdef + "</button><br>" +
                                                         "<button id=\"3\" onclick = \"answerFunction(this.id)\">" + json.randDef2 + "</button><br>";
}


//when quiz buttons are selected, the answer will be checked
//not completely random as answer will always be placed in the second button
function answerFunction(clicked)
{
  var buttonClicked = clicked;
  if(buttonClicked == 2)
  {
    document.getElementById("answer").innerHTML = "That is the correct answer!";
  }
  else
  {
    document.getElementById("answer").innerHTML = "Please try again :/";
  }
}
