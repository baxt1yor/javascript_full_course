let tubson = new Function(['number'], `
    number = number;
    for(var i = 0; i<number; i++){
        let result = true;
        for (var j = 2; j < i; j++){
            if (i % j === 0)
            {
                result = false
            }
        }
        if(result)
        console.log(i)
    }
`);

const a = new tubson(20);