let num = +prompt('Введите число');
if (typeof(num) === 'number' && !isNaN(num)) {
    let result = num % 2;
    if (result === 0) console.log('Четное число');
    if (result !== 0) console.log('Нечетное число');
} else {
    console.log('Кажеться вы ошиблись');
}