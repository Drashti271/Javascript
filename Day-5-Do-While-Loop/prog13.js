// Sum of numbers not divisible by 3 (1 - 30)

let i = 1, sum = 0;

do{
    if(i % 3 !== 0){
        sum += i;
    }
    i++;
}while(i <= 30);

console.log("Sum of numbers not divisible by 3: ",sum);