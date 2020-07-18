
var result_window = document.getElementById('result');
var str_num = "", str_amal = "";
function myfunc(input) {
    if(result_window.innerHTML == "0"){
        result_window.innerHTML = null;
    }
    str_amal += input;
    result_window.innerHTML += input;
    

}
function result()
{
 result_window.innerHTML = eval(str_amal);
}

function clear()
{
    if(result_window.innerHTML != "")
    {
        result_window.innerHTML = "0";
    }
}

