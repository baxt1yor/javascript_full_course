

function sum(limit)
{
    var sum = 0;
    for (var i = 0; i <= limit; i++)
    {
        if (i % 3 == 0 || i % 5 == 0)
        {
           sum += i;
        }
    }
    return sum;
    
}

console.log(sum(10));
