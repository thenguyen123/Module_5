function checkFibonacci(number) {
    if (number < 0) {
        return -1;
    }
    else if (number == 0 || number == 1) {
        return 1;
    }
    else {
        return checkFibonacci(number - 1) + checkFibonacci(number - 2);
    }
}
var sum = 0;
for (var i = 0; i < 8; i++) {
    console.log(checkFibonacci(i));
    sum += checkFibonacci(i);
}
console.log("Tổng dãy số fibonacci " + sum);
