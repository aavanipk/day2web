function buttonClick(val)
  {
    document.getElementById("screen").value=document.getElementById("screen").value+val;  
  }
 
function clearScreen()
{
    document.getElementById("screen").value=""
}
function calculate()
{
  var text=document.getElementById("screen").value
  var result=eval(text)
  document.getElementById("screen").value=result
}