let string = 'hello!';
let len = string.length;
let string2 = '';
for (let i = len; i >= 0; i--){
    string2+= string.slice(i, i+1);
}
console.log(string2);

// Задание выполнено верно, но есть более простой способ решения :) написала ниже

const reverseString = string.split("").reverse().join("");