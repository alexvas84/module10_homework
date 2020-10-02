let X = 'w';
console.log(typeof(X));
switch (typeof(X)) {
    case 'number':
        console.log('X - число');
        break;
    case 'boolean':
        console.log('X - логичесскоий тип');
        break;
    case 'string':
        console.log('X - строка');
        break;
    default:
        console.log('Тип X не определён');
}