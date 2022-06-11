function getCondition(a, b) {
    if( a % 2 ===0) {
        return a * b;
    } else {
       return a+b;
    }
} 

console.log (getCondition (3, 5));
console.log (getCondition (2, 5));
