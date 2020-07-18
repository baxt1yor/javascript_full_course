let arr = [1, 2, 3, 1, 56, 5];
let fetch = [2 , 4, 5,6, 7], ech = [9, 6, 8787, 67];

let obj = [{id: 5, result: 'salom'}, {id: 6, result: 'hayr'}];
//push poxirga qoshadi
arr.push(9);
//includes elmetn qaysi index dan boshalb qidirish true yoki false qaytadi
let res = arr.includes(3, 1);
//unshift arr ning boshiga elemetn qoshadi
arr.unshift(19, 3);
//splice arr ga qiymat ham qoshib ham ochirish uchun ishlatiladi
arr.splice(2, 0, 19);
//find obj yoki arr ichidan qidirish uchun ishalatiladi
let ss= obj.find(element => element.id === 5);

//pop arr ning oxirgi elementni ochiradi
arr.pop();
//shift arr ning boshidagi elementini ochiradi
arr.shift();
//concat toplamlarni birlashitiradi
let ress = fetch.concat(ech);
//slice toplamni ajaratish
let ajrat = ress.slice(4);
//JS ES6 spret operatori orqali birlshtirish
let cambad = [...fetch, ...ech];
//join methodi toplamni barcha elementini string typega otiradi unga argumetn sifatide elementlarni ajaratish uchun biror
//belgi berib yuboriladi
let joins = cambad.join('-');
//forEach for in loop ni boshqacha korinishi bunda uning ichiga anonim functionj beriadi
// cambad.forEach((index, item) => console.log(index, item));
//console.log(joins);

let array = [34, 5, -6, 12, 9];
//sort() array ni saralaydi
array.sort();
//reverce() arrayni teskari korinishda chiqarib beradi 
array.reverse();
//object toplamni saralashda sort methodiga anonim functio beriladi
let course = [
    {id:1, img: 's'},
    {id:2, img: 'd'},
    {id:3, img: 'tu'}
]

course.sort(function(first, second){
    if(first.img > second.img) return -1;
    if(first.img < second.img) return 1;
    return 0;
});
//funtion  manfiy element borlig teshkirildi true yoki false qaytadi hamma element korib chiqiladi 
let all = array.every(function(arr){
    return arr >= 0;
});

//funtion  manfiy element borlig teshkirildi true yoki false qaytadi toplamni birinchi elementida qaytadi
let sium = array.some(function(ss) {
    return ss >= 0;
});

//filter toplamining musbat elemntlaarini yigib beradi
let filterr = array.filter(function(a) {
    return a >= 0;
});

let zanjir = array.filter(number => (number >= 5 && number <= 12)).map(number => number > 10);
let objj = obj.map(obj => obj.id > 2);

let sum = array.reduce((summ, arrNumber) => {
    return summ + arrNumber;
}, 0);

console.log(sum);




