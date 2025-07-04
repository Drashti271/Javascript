// Sum of factorial numbers 1! + 2! + 3! + 4! + 5!

let sum = 0;
let i = 1;

do {
    let fact = 1;
    let j = 1;

    do {
        fact *= j;
        j++;
    } while (j <= i);

    sum += fact;
    i++;
} while (i <= 5);

console.log("Sum of factorial 1 to 5: ", sum);
