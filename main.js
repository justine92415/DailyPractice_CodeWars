//#region Convert string to camel case
/* function toCamelCase(str) {
    if (!str.length) return '';
    const letArr = str.split(/-|_/);
    console.log(letArr);
    const newStrArr = letArr.map((letter, index) => {
        if (index === 0) {
            return letter;
        }
        return letter.replace(letter[0], letter[0].toUpperCase());
    });
    const newStr = newStrArr.join('');
    return newStr;
}

console.log(toCamelCase('a-Cat-Is_kawaii')); */
//#region

//#region Does my number look big in this?
/* function narcissistic(value) {
    let numArr = value.toString().split('');
    const total = numArr.reduce((int, num) => {
        return (int += parseInt(num) ** numArr.length);
    }, 0);
    return total === value;
}
console.log(narcissistic(153)); */
//#region

//#region Printer Errors
/* function printerError(s) {
    let letterArr = s.split('');
    const errorTotal = letterArr.reduce((sum, letter) => {
        if (letter.codePointAt() < 97 || letter.codePointAt() > 109) {
            sum += 1;
        }
        return sum;
    }, 0);
    return `${errorTotal}/${s.length}`;
}

console.log(printerError('abcccccxmmmm')); */
//#region

//#region You're a square!
/* var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0; // fix me
};

console.log(isSquare(3));
console.log(isSquare(-1));
console.log(isSquare(0)); */
//#region

//#region Unique In Order
/* var uniqueInOrder = function (iterable) {
    const uniqueArr = [];
    for (const iterator of iterable) {
        let memoryItem = uniqueArr[uniqueArr.length - 1];
        if (iterator !== memoryItem) {
            uniqueArr.push(iterator);
        }
    }
    return uniqueArr;
}; */
//#region

//#region Sum of Digits / Digital Root
/* function digitalRoot(n) {
    const numArr = [...n.toString()];
    const total = numArr.reduce((sum, num) => {
        sum += parseInt(num);
        return sum;
    }, 0);
    if (total.toString().length > 1) {
        return digitalRoot(total);
    }
    return total;
}
console.log(digitalRoot(493193)); */
//#region
