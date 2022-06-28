const obj1 = {
    laptop : 'MacBook Pro',
    tablet : 'iPad Pro 11'
}
const obj2 = {...obj1};
const obj3 = obj1;

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log("--------------------")
console.log("obj1 === obj2 : ", obj1 === obj2);
console.log("obj1 === obj3 : ", obj1 === obj3);
console.log("obj2 === obj3 : ", obj2 === obj3);
