let string = 'hello!';
let len = string.length;
let string2 = '';
for (let i = len; i >= 0; i--){
    string2+= string.slice(i, i+1);
}
console.log(string2);