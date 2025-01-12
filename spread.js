

const obj1 = {firstName: 'taruna', middleName: 'kuswara'};
const obj2 = {lastName: 'wahyudi'};

const obj3 = {...obj1, ...obj2, address: 'Jakarta'};

console.table(obj3);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];


const arrResult = [...arr1, ...arr2, ...arr3, 10, 11, 12];
console.log(arrResult);