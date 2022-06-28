function f1(x, y){
    var a = Array.prototype.slice.call(arguments, 2);
    return (x+y) * a.length;
};

function f2(x, y, ...a){
    return (x+y) * a.length;
}

console.log(f1(1,2, "hello", true, 7));
console.log(f2(1,2, "hello", true, 7));