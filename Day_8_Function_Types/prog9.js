// Reverse String

let str = 'Hello User..';
const revStr = (str) => {
    let revString = ' ';
    for(let i = str.length - 1; i >= 0; i--){
        revString += str[i];
    }
    return revString;
}
console.log(revStr(str));