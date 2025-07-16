// Sum of factorial numbers 1! + 2! + 3! + .... + 5!

let sum = 0;
for(let i = 1; i <= 5; i++){
    let fact = 1;
    for(let j = 1; j <= i; j++){
        fact *= j;
    }
    sum += fact;
}
console.log("Sum of factorial 1 to 5: ", sum);