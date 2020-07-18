

// function arrayFromRange (min, max) {
//     let result = [];
//     for(var i = min; i <= max; i++){
//         result.push(i);
//     }
//    console.log(result);
// }

//  arrayFromRange(-1, -9);


// let arr = [1, 5, 7, 78, 0];
// let res = includes(arr, 0);
// console.log(res);
// function includes(array, findeleme){    
//         for(let i = 0; i <= array.length; i++)
//             if (array[i] === findeleme)
//             return true;

//             return false;
        
// }


// let number = [1, 2, 3, 4];

// let ouput = move(number, 0, 9);

// console.log(ouput);

// function move(array, index, offset)
// {
// 	let position = offset + index;
// 	if (position >= array.length || position > 0){
// 		return ("Invalid offset");
// 	}
// 	let result = [...array];

// 	let element = result.splice(index, 1)[0];

// 	result.splice(position, 0, element);
// 	return result;
// }

// let str = 'htpp_://GlowH.com/Go/nlvcnnum/';

// let result = str.replace('http_://', 'http_://b.').replace('/Go', '').replace('um/', 'um_L.pdf');

// console.log(result);

// let a=[1,2,2,7,7,7,7,1,4,4];

// let mySet = new Set(a);

// console.log(mySet);

// let array = [1, 2, 3, 4, 5];

// let res = getMaxNumber(array);
// console.log(res);

// function getMaxNumber(arr){
//     if (arr.length === 0){
//         return undefined;
//     }
    
//     return arr.reduce((a, b) => (a > b) ? a : b);
//     //return Math.max(...arr);
// }


const books = [
    {title: 'Clean Code', year: 2008, reting: 8.2}, 
    {title: 'Code Complete, 2nd edition', year: 1993, reting: 9.3}, 
    {title: 'Design Patterns', year: 1994, reting: 7.1},
    {title: 'Soft Skills', year: 2014, reting: 8.2},  
    {title: 'Refactoring, 2nd edittion', year: 2018, reting: 9.7},  
    {title: 'The Pragrmatic Programmer', year: 1999, reting: 8.4}, 
    {title: 'Introduction to Algoriths, 3rd edition', year: 2009, reting: 7.7},
    {title: 'Working Effectively with Legacy Code', year: 2004, reting: 6.9},  
    ];

    let titles = books
                    .filter(b => b.year >= 2010 && b.reting >= 8)
                    .sort((a, b) => a.reting - b.reting)
                    .reverse()
                    .map(b => b.title);

    console.log(titles);
    
    // let result = new Set();
    // for(let obj in books){
    //     result = [];
    //     if(books[obj].year >= 2010 && books[obj].reting >= 8){
    //         console.log(books[obj].title); 
    //     }     
        
    // }
    













