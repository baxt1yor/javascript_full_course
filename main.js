function test(number)
{
    while (number < 5) {
        number++;
    }
    return number;
}

console.log(test(2));


// var cnt = 0;
// function myfunc ()
// {
//     cnt++;
//     var input = document.getElementsByClassName('data').value;
    
//     document.getElementById('element').innerHTML = '<tr><td>'+cnt+'</td>'+'<td>'+input+'</td></tr>';
// }

/*
7-lesson js
{
    var myArray = ['John', 'Doe', 'Bit'];



   localStorage.setItem('myArray', JSON.stringify(myArray));

   var my = JSON.parse(localStorage.getItem('myArray'));
   console.log(my);
   
   
   //console.log(localStorage.getItem(JSON.stringify(myArray[key])));
}
    
*/