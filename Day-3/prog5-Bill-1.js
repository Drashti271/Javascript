// Bill Discount total amount greater than 5k 15% discount.
// else if amount greater than 3k 10% discount.
// else 5% discount.

let p_name = 'TextBook';
let p_price = 2000;
let p_qty = 5;
let total = p_price * p_qty;
let discount = total * 0.1;
let netTotal = total - discount;
let discountRate = 0;

console.log(`Product Name is: ${p_name}`);
console.log(`Product Price is: ${p_price}`);
console.log(`Product Quantity is: ${p_qty}`);
console.log(`Total is: ${total}`);
console.log(`Discount is: ${discount}`);
console.log(`NetTotal is: ${netTotal}`);

if(total > 5000){
    console.log("15% Discount.");
}else if(total > 3000){
    console.log("10% Discount.");
}else{
    console.log("5% Discount.");
}