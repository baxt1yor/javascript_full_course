let bool = false;

let mypromise = new Promise((resolve, reject) => {
        if(bool){
            let a = 19;
            //console.log(a);
            resolve(a);
        }
        else{
            let err = new Error("nimabalo ishalmay qoldi");
            
            reject(err.message);
        }
});

mypromise.then(result => console.log(result)).catch(reans => console.log(reans));