// Sum of all prime numbers from 1 to 50

let sum = 0;
let i = 2;

do {
    let isPrime = true;
    let j = 2;

    do {
        if (i % j === 0 && j !== i) {
            isPrime = false;
            break;
        }
        j++;
    } while (j <= Math.sqrt(i));

    if (isPrime) {
        sum += i;
    }

    i++;
} while (i <= 50);

console.log("Sum of primes 1-50: ", sum);
