// Sum of multiple of 5 from 1 to 50(for loop)

let sum = 0;

for(let i = 1; i <= 50; i++){
    if(i % 5 === 0){
        sum += i;
    }
}
console.log("Sum of multiple of 5 from 1-50: ",sum);