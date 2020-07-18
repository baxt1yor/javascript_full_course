var array = "tatu UrGanch filial";
let myarray = new Array();
array = array.split(" ");
for(let key in array)
{
    var a = key.split("");
    myarray += a;
    
}
for (var i = 0; i < myarray.length; i++)
{

    console.log(i);
}
