let a = 10, b = 50, c = 60;

if(a >= b){
    if(a >= c){
        console.log('A is max.');
    }
    else{
        console.log('C is max.');
    }
}else{
    if(b >= c){
        console.log('B is max.');
    }else{
        console.log('C is max.');
    }
}