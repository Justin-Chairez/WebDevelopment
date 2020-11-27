var $ = function(id) {
  return document.getElementById(id)
}
function changeUnitsCentimeters()
{
  $("unit").innerHTML="Centimeters";
}

function changeUnitsInches()
{
  $("unit").innerHTML="Inches";
}

function display()
{
  var number = parseInt( $("numfield").value);
  if( $("inches").checked )
  {
    $("output").innerHTML=number + " centimeters converts to "
    + convertToInches(number) + " inches";
  }
  if( $("centimeters").checked )
  {
    $("output").innerHTML=number + " inches converts to "
    + convertToCentimeters(number) + " centimeters";
  }
}

function convertToInches(cen)
{
  var inc=cen/2.54;
  inc = inc.toFixed(2);
  return inc;
}

function convertToCentimeters(inch)
{
  var cen=inch*2.54;
  cen = cen.toFixed(2);
  return cen;
}
