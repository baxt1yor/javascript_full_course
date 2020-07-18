// let Laptop = 
// {
//     result: false,
//     display : 100,
//     Ram : 200,
//     powerOn : function(){
//         console.log(((this.result) ? 'yondi' : 'o`chiq' ));
//     }

// }

// for (const key in Laptop) {
//     if (Laptop.hasOwnProperty(key)) {
//         console.log(Laptop[key]);
        
//     }
// }


// function LaptopCreate (cpu, ram, marka, scrensize){
// return {
//     cpu,
//  ram,
// marka,
// scrensize,
// sdf(){
//     console.log('hello');
    
// }
// }}

// let laptop = LaptopCreate('i5', '35gb', 'HP', 15);

// console.log(laptop);


function construct(cpu, stoarage, ram, brand, resize){
    this.cpu = cpu;
    this.stoarage = stoarage;
    this.ram = ram;
    this.brand = brand;
    this.resize = resize
}

let obj = new construct('i5', {hello: '40', draw: 'dfnjn'}, '32gb', 'Hp', 40);
console.log(obj);
