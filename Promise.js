let createBook = false;
let promissen = new Promise(
   function (resolve, reject) {
       setTimeout(() => {
        if (createBook)
        {
            let book = {
                nomi: 'Geniylik bu hislat',
                author: 'Jim kerrrey'   
            };
    
            resolve(book);
        }

        else{
            let error = new Error('Kiton f=dokoniu yopiq');

            reject(error);
        }}, 300)
    }
);

promissen
    .then(result => console.log(result))
    .catch(err => console.log(err))
