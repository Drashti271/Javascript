// Sum of numbers divisible by 4 but not 8 (1 - 50)

let i = 1, sum = 0;

do{
    if(i % 4 === 0 && i % 8 !== 0){
        sum += i;
    }
    i++;
}while(i <= 50);

console.log("Sum of numbers divisible by 4 but not 8: ",sum);