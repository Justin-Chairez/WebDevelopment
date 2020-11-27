function calculate()
{
  deleteTable();

  //gets the user input for miles and the pace for each mile
  //converts miles to a number but keeps pace as a text
	var miles = Number(document.getElementById("miles").value);
  var pace = document.getElementById("pace").value;

  //converts pace from min:sec to seconds for calculations
  var minPace = Number(pace.substring(0,pace.indexOf(":")));
  var secondPace = Number(pace.substring(pace.indexOf(":")+1,pace.length));
  var totalSeconds = ((minPace*60)+secondPace);

  //puts each time for the mile run in the table
  var i;
  for( i = 1; i <= miles; i++ )
  {
    addValue(i,convert(totalSeconds*i));
  }
  console.log("i after loop: " + i)
  //accounts for if miles is not an integer, rather a double
  if( (i-miles) > 0 && (i-miles) < 1 )
  {
    addValue(miles,convert(totalSeconds*miles));
  }
}

//clears the table each time calculate is clicked
//starts from the bottom up, to avoid errors
function deleteTable()
{
  var i;
  var numberOfRows = document.getElementById("table").rows.length-1;
  console.log("rows: " + numberOfRows);
  for( i = numberOfRows; i > 0; i-- )
  {
    document.getElementById("table").deleteRow(i);
  }
}

//adds a new row to the table for each miles and time
function addValue(m,p)
{
  var table = document.getElementById("table");
  var row = table.insertRow();
  var distance = row.insertCell(-1);
  var time = row.insertCell(-1);
  distance.innerHTML = m;
  time.innerHTML = p;
}

//converts time for each miles from seconds to hours,minutes, and seconds
function convert(seconds)
{
  var hour = Math.floor(seconds/3600);
  var min = Math.floor((seconds-(hour*3600))/60);
  var sec = Math.floor(seconds - (hour*3600) - (min*60));
  var text;

  //adds leading zeros if needed
  if( hour < 10 && hour != 0 )
  {
    hour = "0" + hour;
  }
  if( min  < 10 )
  {
    min = "0" + min;
  }
  if( sec < 10 )
  {
    sec = "0" + sec;
  }

  //accounts for if the time is under an hour
  if( hour > 0 )
  {
    return text = hour + ":" + min + ":" + sec;
  }
  else
  {
    return text = min + ":" + sec;
  }
}
