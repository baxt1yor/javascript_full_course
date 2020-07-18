// var n = 20;
// showPrimeNumber(n);
// function showPrimeNumber (input)
// {
    
//     var result = input; 
//     for (let i = 2; i <= input; i++)
//     {
//         var prime  = true;
//         for (var j =2; j < i; j++)
//         {
//              if(i % j === 0)
//              {
//                  prime = false;
//                  break;
//              }
//         }
//         if(prime) console.log(i);
//         }
    
// }

/**
 * eyler funtion
 */
// function func(n)
// {
//     var result = n;
//     for(var i = 2; i * i <= n; i++)
//     {
//         if (n % i === 0)
//         {
//             while(n % 2 === 0)
//              n /= i;
//              result -= result / i;
//         }
//     }
//     if (n > 1)
//     {
//         result -= result / n;
//     }
//     return result;
// }

// for (var j = 2; j <= 20; j++){
//     console.log(func(j));
    
// }

const myfunc = new Function(['number'], 
    `
    this.number = number;
    for(var i = 2; i<= number; i++){
        let result = true;
        for(var j = 2; j<i; j++){
            if(i % j == 0){
                result = false;
            }
        }
        if(result) console.log(i);
    }
    `
);

const TUB = new myfunc(10);