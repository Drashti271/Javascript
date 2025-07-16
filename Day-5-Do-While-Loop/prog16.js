// Sum of numbers from 1 to n until sum > 50

let i = 1, sum = 0;

do{
    sum += i;
    i++;
}while(sum <= 50);

console.log("Sum of until > 50: ",sum);