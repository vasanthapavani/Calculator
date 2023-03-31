function clearScreen() 
{
        document.getElementById("result").value = "";
}
function display(value) 
{
            document.getElementById("result").value += value;
}
function calculate() {
        var val= document.getElementById("result").value;
        var re = eval(val);
        document.getElementById("result").value = re;
}    