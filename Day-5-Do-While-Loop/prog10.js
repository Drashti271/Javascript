// Sum of even numbers between 50 and 100

let i = 50, sum = 0;

do{
    if(i % 2 === 0){
        sum += i;
    }
    i++;
}while(i <= 100);

console.log("Sum of even numbers between 50-100: ",sum);