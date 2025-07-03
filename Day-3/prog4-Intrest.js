// if amount 5L is invested for 5 years the intrest 7 % per annum.
// else if amount 3L is invested for 3 years the intrest 5 % per annum.
// else if amount 2L is invested for 3 years the intrest 4.2 % per annum.
// else  2.5 % per annum.

let amount = 500000; 
let years = 5;

if(amount === 500000 && years === 5){
    console.log('Rate is: 7%');
}else if(amount === 300000 && years === 3){
    console.log('Rate is: 5%');
}else if(amount === 200000 && years ===3){
    console.log('Rate is: 4.2%');
}else{
    console.log('Rate is: 2.5%');
}