// if bill total amount more than 2k the delivery free else 50rs.

let p_name = 'Notebook';
let p_price = 300;
let p_qty = 10;
let total = p_price * p_qty;

console.log(`Product Name is: ${p_name}`);
console.log(`Product Price is: ${p_price}`);
console.log(`Product Quantity is: ${p_qty}`);
console.log(`Total is: ${total}`);

if(total >= 2000){
    console.log('Delivery Free.');
}else{
    console.log('50rs.');
}