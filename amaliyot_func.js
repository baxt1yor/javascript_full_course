// let Crisle = {
//     radius: 1, 
//     PI: 3.14, 
//     get mrcrisle(){
//         return this.radius;
//     }, 
//     set mrcrisle(mradius){
//         this.radius = mradius;
//     }
// };

// Crisle.mrcrisle= 6;

// let s = Crisle.PI * Math.pow(Crisle.mrcrisle, 2);
// console.log(s);


let personJson = '{"age":21}';
let parse = JSON.parse(personJson);

try {
    if (!parse.name){
        throw new Error("Object ichida name hossasi mavjud emas");
    }
    console.log(parse.name);
}
catch(error)
{
    console.log(error.message);
}