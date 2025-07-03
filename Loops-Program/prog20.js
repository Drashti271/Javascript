// sum of alternate numbers (1, 3, 5, ....to 19) using while

let i = 1 , sum = 0;

while(i < 20){
    sum += i;
    i += 2;
}
console.log("Sum of alternativenumbers(odd): ",sum);