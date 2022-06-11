function getCondition(a, b) {
    if( a % 2 ===0) {
        return a * b;
    } else {
       return a+b;
    }
} 

console.log(getCondition (3, 5));
console.log(getCondition (2, 5));

function getQuarter(x, y) {
    if(x <0 || y > 0) {
       return ('Первая четверть');
    } else if(x > 0 || y > 0) {
        return ('Вторая четверть');
    } else if(x > 0 || y < 0) {
        return ('Третья четверть');
    } else if(x < 0 || y < 0) {
        return ('Четвертая тетверть');
    } else if(x === 0 || y ===0 ) {
        return ('Начало отсчета, точка "0"');
    } else if(x === 0 || y > 0) {
        return ('Первая и вторая четверть');
    } else if(x === 0 || y < 0) {
        return ('Третья и четвертая четверть')
    } else if(x < 0 || y === 0) {
        return ('Чертвертая и первая четверть')
    } else if(x > 0 || y === 0) {
        return('Вторая и третья четверть')
    }
}
console.log (getQuarter (2, 2))



function getSum(a, b, c) {
    let result = 0;

    if(a > 0) {
        result = result + a;
    }  

    if(b > 0) {
        result = result + b;
    }

    if(c > 0) {
        result += c;
    }

    return result;
}
console.log(getSum (2, 3, -5))

function getMax(a, b, c) {
    let resultSum = a + b + c;
    let resultMultiplication = a * b * c;
    if(resultMultiplication > resultSum) {
        return  resultMultiplication + 3;
    } else {
        return resultSum + 3;
    }
}
console.log(getMax (-2, -4, -5))

function getAssessment (a) {
    if(a >= 0 && a <= 19) {
        return ('F');
    } else if( a >= 20 && a <= 39) {
        return ('E');
    } else if(a >= 40 && a <= 59) {
        return ('D');
    } else if(a >= 60 && a <= 74) {
        return ('C');
    } else if(a >= 75 && a >=89) {
        return ('B');
    } else if(a >=90 && a <= 100) {
        return ('A');
    } 
}

console.log (getAssessment (40))