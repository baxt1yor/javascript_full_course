// let myobj = {
//     title: 'salom',

//     start() {
//         console.log(this);
//     }
// }

// myobj.start();

// function game () {
//     console.log(this);
// }
// game();

let Game = {
    game: 'needspedfor',
    car:  ['jugili', 'nexia', 'cobalt', 'malibu'],
    showCar() {
        
        this.car.forEach(function (car) {
            console.log(this.game , car);
        }, this);
        console.log("\n");
        
        this.car.forEach(car => {
            console.log(this.game, car);
        })
        
    }
}

Game.showCar();