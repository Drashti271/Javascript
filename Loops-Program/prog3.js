// Sum of odd numbers from 1 to 20(while loop)

let sum = 0, i = 1;

while(i <= 20){
    if(i % 2 === 0){
        sum += i;
    }
    i++;
}
console.log("Sum of odd numbers 1-20: ",sum);
