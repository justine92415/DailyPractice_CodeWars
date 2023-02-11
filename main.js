/* *****0211***** */

//#region Roman Numerals Encoder
/* function solution(number) {
    //#region My solution
    // const romaLetterArr = [
    //     ['M', 'MM', 'MMM'],
    //     ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    //     ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    //     ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    // ];
    // let wordArr = [];
    // let str = '';
    // for (let i = 1000; i >= 1; i = i / 10) {
    //     headNumber = number / i;
    //     wordArr.push(Math.floor(headNumber) - 1);
    //     number = number % i;
    // }
    // for (let j = 0; j < wordArr.length; j++) {
    //     if (!romaLetterArr[j][wordArr[j]]) continue;
    //     str += romaLetterArr[j][wordArr[j]];
    // }
    // return str;
    //#region Good solution
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let str = '';

    while (number > 0) {
        for (const letter in roman) {
            if (roman[letter] <= number) {
                str += letter;
                number -= roman[letter];
                break;
            }
        }
    }

    return str;
}
console.log(solution(1001)); */
//#endregion

//#region Find the missing letter
/* function findMissingLetter(array) {
    return String.fromCharCode(
        array
            .find((letter, index, arr) => {
                return (
                    letter.codePointAt() - arr[index + 1].codePointAt() !== -1
                );
            })
            .codePointAt() + 1
    );
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); */
//#endregion

//#region Highest Scoring Word
/* function high(x) {
    const wordArr = x.split(' ');
    const scoreArr = wordArr.map((word) => {
        const letterArr = word.split('');
        return letterArr.reduce((sum, letter) => {
            return (sum += letter.codePointAt() - 96);
        }, 0);
    });
    const maxIndex = scoreArr.findIndex(
        (score) => score === Math.max(...scoreArr)
    );
    return wordArr[maxIndex];
}

console.log(high('aa b'));
console.log(high('aaa b'));
console.log(high('take me to semynak')); */
//#endregion

//#region Sort the odd
/* function sortArray(array) {
    //#region My solution
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) continue;
    //     for (let j = i; j < array.length; j++) {
    //         if (array[j] % 2 === 0) continue;
    //         if (array[i] > array[j]) {
    //             let temp = array[j];
    //             array[j] = array[i];
    //             array[i] = temp;
    //         }
    //     }
    // }
    // return array;
    //#endregion
    //#region good solution
    let oddArr = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b);
    return array.map((item) => (item % 2 === 0 ? item : oddArr.shift()));
    //#endregion
}

console.log(sortArray([]));
console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); */
//#endregion

//#region Tribonacci Sequence
/* function tribonacci(signature, n) {
    //#region My solution
    let curN = 0;
    const printArr = [];
    while (signature.length < n) {
        let total = signature.reduce((curSum, _, _2, arr) => {
            return (curSum = arr[curN] + arr[curN + 1] + arr[curN + 2]);
        }, 0);
        signature.push(total);
        curN += 1;
    }
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            printArr.push(signature[i]);
        }
        return printArr;
    }
    return printArr;

    //#region good solution
    // for (let i = 0; i < n - 3; i++) {
    //     signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
    // }
    // return signature.slice(0, n);
}
console.log(tribonacci([1, 1, 1], 3)); */
//#endregion

/* *****0210***** */
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
//#endregion

//#region Does my number look big in this?
/* function narcissistic(value) {
    let numArr = value.toString().split('');
    const total = numArr.reduce((int, num) => {
        return (int += parseInt(num) ** numArr.length);
    }, 0);
    return total === value;
}
console.log(narcissistic(153)); */
//#endregion

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
//#endregion

//#region You're a square!
/* var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0; // fix me
};

console.log(isSquare(3));
console.log(isSquare(-1));
console.log(isSquare(0)); */
//#endregion

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
//#endregion

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
//#endregion
