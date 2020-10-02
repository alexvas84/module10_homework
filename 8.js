let myMap = new Map();
myMap.set(1, 'Mon');
myMap.set(2, 'Tue');
myMap.set(3, 'Wed');
myMap.set(4, 'Thu');
myMap.set(5, 'Fri');
myMap.set(6, 'Sat');
myMap.set(7, 'Sun');
console.log(myMap);

myMap.forEach((value, key) => {
    console.log(`${key} - ${value}`);
});