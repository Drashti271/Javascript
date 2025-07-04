// Sum of digits of a number(e.g., 12345)

let num = 12345, sum = 0;

do{
    sum += num % 10;
    num = Math.floor(num / 10);
}while(num > 0);

console.log("Sum of digits of a number: ",sum);