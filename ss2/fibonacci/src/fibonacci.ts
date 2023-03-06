function checkFibonacci(number: number): number {
    if (number < 0) {
        return -1;

    } else if (number == 0 || number == 1) {
        return 1;
    } else {
        return checkFibonacci(number - 1) + checkFibonacci(number - 2);
    }
}

let sum = 0;
for (let i = 0; i < 8; i++) {
    console.log(checkFibonacci(i));
    sum += checkFibonacci(i);
}
console.log("Tổng dãy số fibonacci "+ sum);