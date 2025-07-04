// Sum of even numbers from 1 to 20

let i = 1, sum = 0;

do{
    if(i % 2 === 0){
        sum += i;
    }
    i++;
}while(i <= 20);
console.log("Sum of even numbers from 1-20: ",sum);