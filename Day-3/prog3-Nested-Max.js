let a = 100, b = 50, c = 520, d = 120, e = 200;

if(a >= b && a >= c && a >= d && a >= e){
    console.log('A is max.');
}else if(b >= a && b >= c && b >= d && b >= e){
    console.log('B is max.');
}else if(c >= a && c >= b && c >= d && c >= e){
    console.log('C is max.');
}else if(d >= a && d >= b && d >= c & d >= e){
    console.log('D is max.');
}else{
    console.log('E is max.');
}