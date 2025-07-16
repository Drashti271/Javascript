// Space

let str = 'Hello User..';
const revStr = (str) => {
    let s = ' ';
    for(let i = 0; i < str.length; i++){
        s += str[i] + ' ';
    }
    return s;
}
console.log(revStr(str));