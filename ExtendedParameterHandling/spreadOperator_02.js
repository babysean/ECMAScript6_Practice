const obj1 = {
    laptop : 'MacBook Pro',
    tablet : 'iPad Pro 11'
}

const obj2 = {
    ...obj1,
    phone : 'iPhone SE'
}

const obj3 = {
    obj1,
    phone : 'iPhone SE'
}

console.log(obj1);
console.log(obj2);
console.log(obj3);