let arr = [0, 0, 0, 0];
let x = true;
for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] !== arr[i+1]) x = false;
}
switch (x) {
    case true:
        console.log('Все элементы одынаковы');
        break;
    case false:
        console.log('Не все элементы одынаковы');
        break;
}