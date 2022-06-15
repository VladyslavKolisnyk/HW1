function getСycle() {
    let resultSum = 0;
    let resultQuantity = 0;
    
    for(let i = 0; i <= 99; i++ ) {
       
        if (i % 2 ===0) {
            resultSum += i;
            resultQuantity += 1;
        }
    }

    return {
        Sum: resultSum, 
        Quantity: resultQuantity
    }
 } 
 console.log (getСycle ())

 function isProstoy (a) {
    for (let i = 2; i <  a; i++) {
        if (a % i === 0){
            return false;
        }
    }

    return true;
 } console.log (isProstoy (15), isProstoy (17))

//  function getRoot (a) {
    
//     for (let i = 1; i < a; i++) {
//         let whole = i -  1;
//         let root = i ** 2;
//         if (root === a ) {
//             return i;
//         } else if (whole > i) {
//             return i;
//         } else {
//             return whole;
//         }
//     } 
    
//  } console.log (getRoot (9))
 function getRoot(number) {

    for(let i = 0; i < number; i++) {
        const root = i * i;

        if(number < root) {
            const previous = i - 1;
            const previousSquare = previous * previous;

            if(root - i < i - previousSquare) {
                return i;
            } else {
                return previous;
            }
        }
    }
} console.log (getRoot (23))

// function getBin (number) {
//     let min = 0;
//     let max = number;
//     let center = (min + max) / 2;
//     let root = min * min;
//     let found = false;
//     while(!found) {
//       console.log(0)
//         if (center === min) {
//             console.log (1)
//             found = true;
//             return center;
//         } else if(center  > min) {
//             console.log (2)
//             let center = min;
//         } else if ( center < min) {
//             console.log (3)
//             let center = max;
//         }
//     }
// } console.log (getBin (9))

function getBin(number) {
    let begin = 1;
    let end = number;
    let center = Math.floor(number/2);
    while(true) {
        
        console.log (begin, end, center);
       
        if(end - begin === 0) {
            return end;
        } else if(end - begin === 1) {
            const newEnd = end * end - number;
            const newBegin = number - begin * begin;
            
            if(newEnd > newBegin) {
                return begin;
            } else {
                return end;
            }
       } else {
            if(center * center > number) {
            end = center;
            center = Math.floor((end - begin)/2 + begin);
            } else {
                begin = center;
                center = Math.floor((end - begin)/2 + begin);
            }
        } 
    }
}

console.log (getBin(9));

function getFactorial(n) {
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(getFactorial(4))

function getSum (number) {

    let numberArray = number.toString().split("")
    let result = 0;
    
    for(let i = 0; i < numberArray.length; i++) {
        result +=Number.parseInt(numberArray[i]);
    }
     return result;
}

console.log(getSum(2548))

function reversNumber (number) {
    let numberArray = number.toString().split("");
    // let result = [];
        const numberRevers = numberArray.reverse();
        
        return Number.parseInt(numberRevers.join(''))
    
}
console.log (reversNumber(1232))


function reverseNumberCycle (number) {
    let numberArrayCycle = number.toString().split('');
    let result = [];
    for(let i = numberArrayCycle.length - 1; i >= 0; i--){
        result.push(numberArrayCycle[i]);
    }
    
    result = result.join('');
    return Number.parseInt(result)
}
console.log(reverseNumberCycle(123))

