//Function Declaration
//read();
function read(){
    console.log('oqish');
}

//Anonymous Function or Function Expression
//bu funtoni uni yuqorisida chqirib bolmaydi xatolik elon qiladi
let myfunc = function () {
    console.log('yozish');
}
//myfunc();
// arguments bu functionga berilgan hamma argumentlarni object qilib beradi
//rest parametrs ...args operatori bu functioon ga berilgan parametrlarni yigib 
//array qaytaradi rest parametrs dan keyin biror ozgaruvchi elon qilib bolmaydi

function sum(...args){
    // let result = 0;
    // for(let value of arguments){
    //     result += value;
    // }
    return args.reduce((a, b) => a+b);
}


//getter va setter methodlari
let person = {
    firstName: 'Baxtiyor', 
    lastName: 'Eshametov', 
    get fullName() {
       return this.firstName + ' ' + this.lastName;
    },
    set fullName(value){
        if (typeof value !== 'string')
        throw new Error('Malumot sart ko`rinishda emas');
        let fullNameArray = value.split(' ');
        if(fullNameArray.length !== 2)
        throw new Error('Ismi sharfingizni kiriting');
        this.firstName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    } 
}
try{
    person.fullName = true;
}
catch(err){

    console.log(err);
}
