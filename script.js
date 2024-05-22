const display=document.getElementById("display");
function appendtoDisplay(input){
    display.value+=input;
}
function clearDisplay()
{
    display.value="";

}
function backspace()
{
    let currentValue = display.value;
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;

}
function calculate()
{
    try{
        display.value=eval(display.value);


    }
    catch(error)
    {
        display.value="Syntax Error";

    }
    
}
function percentage()
{
    display.value+="/100";

}