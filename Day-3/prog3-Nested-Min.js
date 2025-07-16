let a = 50, b = 40, c = 10, d = 70, e = 30;

if(a <= b && a <= c && a <= d && a <= e){
    console.log('A is min.');
}else if(b <= a && b <= c && b <= d & b <= e){
    console.log('B is min.');
}else if(c <= a && c <= b && c <= d && c <= e){
    console.log('C is min.');
}else if(d <= a && d <= b && d <= c && d <= e){
    console.log('D is min.');
}else{
    console.log('E is min.');
}