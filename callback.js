function callback(num1, num2, call){
    console.log(`${num1} va  ${num2} sonlarining yig'indisi ${num1 + num2}`);
    call();
}

callback(44, 8, function () {
    console.log("bu qator nimadir ");
});