const studenet = [85, 34, 96, 56, 40];

function studenet_solution(balls)
{
    var result = 0;
    for (let index = 0; index < balls.length; index++) {
       result += balls[index];
    }   
    result = result / balls.length;
    console.log(result);
    
    if (result >= 0 && result <= 50) {
        return 'F';
    }
    if (result >= 51 && result <= 60) {
        return 'D';
    }
    if (result >= 61 && result <= 70) {
        return 'C';
    }
    if (result >= 71 && result <= 80) {
        return 'B';
    }
    if (result >= 81 && result <= 100) {
        return 'A';
    }
    
}

console.log(studenet_solution(studenet));
