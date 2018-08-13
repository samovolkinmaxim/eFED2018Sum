function countChar(str, char) {
    str = str.toLowerCase();
    char = char.toLowerCase();
    var count = 0;
    for(symbol in str)
        if(str[symbol] == char)
            count++;
    return count;
}
console.log("Проверка функции подсчета букв:\nПодсчет буквы 'm' в строке 'My Random String'");
console.log(countChar('My Random String', 'm'));


function chessBoard(height, width) {
    line = "";
    for(; height > 0; height--) {
        for(var i = 0; i < width; i++) 
            line += ((i+height)%2 == 0)?"#":" ";
        line += '\n';
    } 
    return line;
}
console.log("Проверка функции chessBoard(8, 8):");
console.log(chessBoard(8, 8));


function makeArray(start, end, step=1) {
    var buffer = Array();
    step *= Math.sign(end - start);
    var turns = Math.abs((end - start) / step);

    for (let i = 0; i <= turns; i++) {
        buffer.push(i*step + start);
    }
    return buffer;
}


/* for objects */
function deepCompare(a, b) {
    for (let key in a) {
        if( !(key in b) )
            return false;
        else {
            if( a[key] instanceof Object && b[key] instanceof Object &&
                deepCompare(a[key], b[key]) )
                continue;
            if( a[key] !== b[key])
                return false;
        }
    }
    return true;
}
console.log("Проверка deepCompare(): ");
console.log("{1: 1, 3: 222}, {1: 1, 3: 999} - " + deepCompare({1: 1, 3: 222}, {1: 1, 3: 999}));
console.log("{1: {1: 2, 3: true}}, {1: {1: 2, 3: true}} - " + deepCompare({1: {1: 2, 3: true}}, {1: {1: 2, 3: true}}));
console.log("{1: {1: 2, 3: 'true'}}, {1: {1: 2, 3: true}} - " + deepCompare({1: {1: 2, 3: 'true'}}, {1: {1: 2, 3: true}}));


function reverseArray(a) {
    var buffer = [];
    for (let i in a)
        buffer.unshift(a[i]);
    return buffer;
}
console.log("Проверка reverseArray():");
console.log("[1, 2, 3, 4, 5] -> " + reverseArray([1, 2, 3, 4, 5]));


function reverseArrayInPlace(a) {
    for (let i = 0; i < a.length/2; i++) {
        let tmp = a[i];
        a[i] = a[ a.length - i - 1];
        a[ a.length - i - 1] = tmp;
    }
}
console.log("Проверка reverseArrayInPlace():");
var ak = [1, 2, 3, 4, 5, 6];
console.log("Начальный массив: " + ak);
reverseArrayInPlace(ak);
console.log("Конечный массив: " + ak);


function mergeArrays(...args) {
    var buf = {};
    for (let i in arr=[].concat(...args))
        buf[arr[i]] = true;
    return Object.keys(buf);
}
console.log("Проверка mergeArrays():");
console.log("[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [1], [1, 10]");
console.log("=> " + mergeArrays([1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [1], [1, 10]));

/* ПРИЛОЖЕНИЕ Б. */

function every(arr, func) {
    for (let i in arr)
        if( !func(arr[i]) ) return false;
    return true;
}
console.log("Проверка every():");
console.log("every([NaN, NaN, NaN], Number.isNaN) -> " + every([NaN, NaN, NaN], Number.isNaN));
console.log("every([NaN, 7, NaN], Number.isNaN) -> " + every([NaN, 7, NaN], Number.isNaN));


function some(arr, func) {
    for (let i in arr)
        if( func(arr[i]) ) return true;
    return false;
}
console.log("Проверка some():");
console.log("some([NaN, 7, NaN], Number.isNaN) -> " + some([NaN, 7, NaN], Number.isNaN));



function multiplyOrThrow(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw 'MultiplicatorUnitFailure';
    }
}

function tryMultiply() {
    var trying = 0;
    while (true) {
        try {
            console.log("Trying to multiply " + trying++ + " times...");
            return multiplyOrThrow(5, 7);
        }
        catch(MultiplicatorUnitFailure) {
            continue;
        }
    }
}
console.log("Проверка multiplyOrThrow():");
console.log(tryMultiply());


function getNames(date) {
    return "" +
    {0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"}[date.getMonth()] + ", " +
    {0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday"}[date.getDay()];
}
console.log("Проверка getNames():");
console.log("Today is " + getNames(new Date()));


function differenceInYears(dateA, dateB) {
    return (Math.abs(dateA - dateB) / 1000 / 3600 / 24 / 365).toFixed(1);
}
console.log("Проверка differenceInYears():");
console.log("today - 09.01.1998 = " + differenceInYears(new Date(1998, 0, 8), new Date()));

function replaceQuotes(str) {
    return str.replace(/'(\w*)'/g, '"$1"');
}
console.log("Провека replaceQuotes():");
console.log("I'm a 'man'. I'm the 'guardian' -> " + replaceQuotes("I'm a 'man'. I'm the 'guardian'"));