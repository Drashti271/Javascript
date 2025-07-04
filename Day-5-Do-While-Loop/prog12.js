// Sum of digits of all numbers from 1 to 50

let i = 1, sum = 0;

do{
    let num = i;
    while(num > 0){
    sum += num % 10;
    num = Math.floor(num / 10);
    }
    i++;
}while(i  <= 50);

console.log("Sum of digits of all numbers from 1-50: ",sum);