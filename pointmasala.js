const   MAX_TEZLIK = 70, POINTER = 5, MAX_POINTER = 12;

function point(input)
{
    if(input < MAX_TEZLIK + POINTER)
    {
         console.log('OK');
    }
    else{
        var shtraf = input - MAX_TEZLIK;
        var solt = Math.floor(shtraf);
        var pointer_soni = solt / POINTER;
        if (pointer_soni >= MAX_POINTER)
        {
            console.log(`Sizning pointlar soni qiymati ${pointer_soni} ga yetdi  gufohnomangiz olib qoyiladi !!!`);
            
        }
        else{

            console.log(`Sizda hozrda ${pointer_soni} ta point bor`) 
        }
    }

}

point(125);