let Mass = [-1, 50000, 25, -10000, 300 ];

// split function by functionality 
// we must get 4 functions (getMaxArrayValue(array), getMinArrayValue(array), getIndexOfMaxValue(array), getIndexOfMinValue(array))
// all functions has to return number
function getMaxMass(Mass) {
    let min = Mass[0];
    // add variable to determine max value
    for(let i = 0; i < Mass.length; i++) {
        if(Mass[i] < min) {
            min = Mass[i];
       console.log(1)
        } else {
            max = Mass[i];
        }
        console.log(2)
    }
    return max;
}
console.log (getMaxMass(Mass))
