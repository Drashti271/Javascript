// Sum of all numbers ending with digit 7 (1 - 100)

let i = 1, sum = 0;

do{
    if(i % 10 === 7){
        sum += i;
    }
    i++;
}while(i <= 100);
console.log("Sum of all numbers ending with digit 7: ",sum);