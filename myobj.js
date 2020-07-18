let obj = {
    model: 'Mersedes',
    make: 'ssss',
    year: 2009,
    price: 60000
};

function showProperties(obj)
{
    for (var iterator in obj) {
         if (typeof obj[iterator] === 'string')
         {
             console.log(iterator + ":" obj[iterator]);
         }   
    }

    
}
showProperties(car);