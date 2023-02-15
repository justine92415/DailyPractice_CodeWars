/* *****0215***** */

//#region Maximum subarray sum
/* function maxSmaxSequence(arr) {
    const isAllNative = arr.every((item) => item < 0);
    if (!arr.length || isAllNative) return 0;
    const maxSumArr = arr.reduce((empty, _, index, array) => {
        let f =
            empty[index - 1] > 0
                ? array[index] + empty[index - 1]
                : array[index];
        empty.push(f);
        return empty;
    }, []);
    return Math.max(...maxSumArr);
}
//  參考 https://www.youtube.com/watch?v=7J5rs56JBs8
console.log(maxSmaxSequence([-1, -2, -3])); */
//#endregion

//#region Greed is Good
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point
/* function score(dice) {
    //#region My solution
    // const uniqueArr = [...new Set(dice)];
    // return uniqueArr
    //     .map((num) => {
    //         let count = 0;
    //         dice.forEach((dicNum) => {
    //             if (dicNum === num) count++;
    //         });
    //         if (count >= 3 && num !== 1 && num !== 5) return num * 100;
    //         if (count >= 3 && num === 1) {
    //             return num * 1000 + (count - 3) * num * 100;
    //         }
    //         if (count >= 3 && num === 5) {
    //             return num * 100 + (count - 3) * num * 10;
    //         }
    //         if (count === 6) return num * 100 * 2;
    //         if (count < 3 && num === 1) return count * num * 100;
    //         if (count < 3 && num === 5) return count * num * 10;
    //         return 0;
    //     })
    //     .reduce((sum, num) => (sum += num), 0);
    //#endregion

    //#region good solution
    const dc = [0, 0, 0, 0, 0]; // 1 2 3 4 5
    const tdr = [1000, 200, 300, 400, 500];
    const sdr = [100, 0, 0, 0, 50];

    dice.forEach((num) => {
        dc[num - 1]++;
    });

    return dc.reduce((sum, num, i) => {
        return sum + (num >= 3 ? tdr[i] : 0) + sdr[i] * (num % 3);
    }, 0);
    //#endregion
}

// console.log(score([2, 3, 4, 6, 2]));
// console.log(score([4, 4, 4, 3, 3]));
// console.log(score([2, 4, 4, 5, 4]));
// console.log(score([5, 1, 3, 4, 1]));
console.log(score([2, 3, 3, 3, 3]));
// console.log(score([2, 4, 4, 5, 4]));
 */
//#endregion

/* *****0214***** */
//#region Pete, the baker
/* function cakes(recipe, available) {
    let isHave;
    let arr = [];

    for (const key in recipe) {
        isHave = true && available[key] >= recipe[key];
    }

    if (isHave) {
        for (const key in recipe) {
            arr.push(Math.floor(available[key] / recipe[key]));
        }
    }

    if (!arr.length) return 0;

    console.log(arr);
    return Math.min(...arr);
}

console.log(
    cakes(
        { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
        { sugar: 500, flour: 2000, milk: 2000 }
    )
);
 */
//#endregion

//#region Snail
/* const testarray = [
    [1, 2, 3, 1],
    [4, 5, 6, 4],
    [7, 8, 9, 7],
    [7, 8, 9, 7],
];

//#region  My solution
// var snail = function (array) {
//     if (!array.length) return [[]];
//     const resultArr = [];
//     const direction = array.length % 2 === 0 ? 'rtl' : 'ltr';

//     let top = 0;
//     let bottom = array.length - 1;

//     while (array.length > 0) {
//         while (top !== bottom) {
//             if (!top) {
//                 resultArr.push(...array[top]);
//                 array[top] = [];
//                 top += 1;
//             } else {
//                 resultArr.push(array[top].pop());
//                 top += 1;
//             }
//         }

//         array = array.filter((item) => item.length > 0);
//         top = 0;
//         bottom = array.length - 1;

//         while (bottom !== top) {
//             if (bottom === array.length - 1) {
//                 while (array[bottom].length > 0) {
//                     resultArr.push(array[bottom].pop());
//                 }
//                 array[bottom] = [];
//                 bottom -= 1;
//             } else {
//                 resultArr.push(array[bottom].shift());
//                 bottom -= 1;
//             }
//         }

//         array = array.filter((item) => item.length > 0);
//         top = 0;
//         bottom = array.length - 1;

//         if (array.length === 1) {
//             while (array[0].length > 0) {
//                 if (direction === 'ltr') {
//                     resultArr.push(array[0].shift());
//                 }
//                 resultArr.push(array[0].pop());
//             }
//             array = [];
//         }
//     }

//     return resultArr;
// };
//#endregion

//#region good solution
// const snail = function (array) {
//     const resultArr = [];
//     while (array.length) {
//         resultArr.push(...array.shift());
//         array.map((row) => {
//             resultArr.push(row.pop());
//         });
//         array.reverse().map((row) => row.reverse());
//     }

//     return resultArr;
// };
//#endregion

console.log(snail(testarray)); */
//#endregion

/* *****0213***** */

//#region Calculating with Functions
/* function zero() {
    if (!arguments.length) return 0;
    else return Math.floor(eval(0 + arguments[0]));
}
function one() {
    if (!arguments.length) return 1;
    else return Math.floor(eval(1 + arguments[0]));
}
function two() {
    if (!arguments.length) return 2;
    else return Math.floor(eval(2 + arguments[0]));
}
function three() {
    if (!arguments.length) return 3;
    else return Math.floor(eval(3 + arguments[0]));
}
function four() {
    if (!arguments.length) return 4;
    else return Math.floor(eval(4 + arguments[0]));
}
function five() {
    if (!arguments.length) return 5;
    else return Math.floor(eval(5 + arguments[0]));
}
function six() {
    if (!arguments.length) return 6;
    else return Math.floor(eval(6 + arguments[0]));
}
function seven() {
    if (!arguments.length) return 7;
    else return Math.floor(eval(7 + arguments[0]));
}
function eight() {
    if (!arguments.length) return 8;
    else return Math.floor(eval(8 + arguments[0]));
}
function nine() {
    if (!arguments.length) return 9;
    else return Math.floor(eval(9 + arguments[0]));
}

function plus() {
    return `+${arguments[0]}`;
}
function minus() {
    return `-${arguments[0]}`;
}
function times() {
    return `*${arguments[0]}`;
}
function dividedBy() {
    return `/${arguments[0]}`;
}

console.log(eight(dividedBy(three()))); */
//#endregion

//#region First non-repeating character
/* function firstNonRepeatingLetter(s) {
    //#region My solution
    // const letters = s.split('');
    // const uniqueArr = letters.filter((letter, i, arr) => {
    //     const copyArr = [...arr];
    //     copyArr.splice(i, 1);
    //     const isUnique = copyArr.some((t) => {
    //         return t.toLowerCase() === letter.toLowerCase();
    //     });
    //     return !isUnique;
    // });
    // if (!uniqueArr.length) return '';
    // return uniqueArr[0];
    //#endregion
    //#region good solution
    // for (const i in s) {
    //     if (s.match(new RegExp(s[i], 'gi')).length === 1) {
    //         return s[i];
    //     }
    // }
    // return '';
    //#endregion
}

console.log(firstNonRepeatingLetter('sTreSS'));
console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonmen')); */
//#endregion

/* *****0212***** */

//#region Most frequently used words in a text
/* function topThreeWords(text) {
    const wordArr = text
        .trim()
        .replace(/^[\\']+$/, '')
        .replace(/[,|.|#|\|/|\n]/g, '')
        .toLowerCase()
        .split(' ');
    const uniqueArr = [...new Set(wordArr)].filter((letter) => letter);
    const countArr = uniqueArr.map((word) => {
        let count = 0;
        wordArr.forEach((text) => {
            if (text === word) count += 1;
        });
        return count;
    });

    const sortArr = [...countArr].sort((a, b) => b - a);

    const topArr = sortArr
        .map((t, i) => {
            if (i > 2) return '';
            let text = uniqueArr[countArr.indexOf(t)];

            let index = countArr.indexOf(t);
            countArr.splice(index, 1);
            uniqueArr.splice(index, 1);
            return text;
        })
        .filter((item) => item !== '');
    return topArr;
}
topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`);
topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e');
topThreeWords('a a a  b  c c  d d d d  e e e e e');
topThreeWords('a a c b b');
topThreeWords('  ...  '); */
//#endregion

//#region Build Tower
/* function towerBuilder(nFloors) {
    //#region My solution
    // const towerArr = [];
    // const center = Math.floor((2 * nFloors - 1) / 2);
    // for (let i = 0; i < nFloors; i++) {
    //     let str = '';
    //     for (let j = 0; j < 2 * nFloors - 1; j++) {
    //         if (j >= center - i && j <= center + i) {
    //             str += '*';
    //         } else {
    //             str += ' ';
    //         }
    //     }
    //     towerArr.push(str);
    // }
    // return towerArr;
    //#endregion
    //#region Good solution
    return Array.from({ length: nFloors }, (item, index) => {
        const space = ' '.repeat(nFloors - index - 1);
        return space + '*'.repeat(2 * index + 1) + space;
    });
    //#endregion
}

console.log(towerBuilder(1)); */
//#endregion

//#region Product of consecutive Fib numbers
/* function productFib(prod) {
    // ...
    const fibArr = [0, 1];
    while (fibArr[fibArr.length - 1] * fibArr[fibArr.length - 2] < prod) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    console.log(fibArr);
    return [
        fibArr[fibArr.length - 2],
        fibArr[fibArr.length - 1],
        fibArr[fibArr.length - 1] * fibArr[fibArr.length - 2] === prod,
    ];
}

console.log(productFib(4895)); */
//#endregion

//#region Which are in?
/* function inArray(array1, array2) {
    const matchArr = array1.reduce((empArr, word) => {
        const isMatch = array2.some((parent) => parent.includes(word));
        if (isMatch) {
            empArr.push(word);
        }
        return empArr;
    }, []);
    return matchArr.sort();
}

console.log(
    inArray(
        ['live', 'strong', 'arp'],
        ['lively', 'alive', 'harp', 'sharp', 'armstrong']
    )
); */
//#endregion

//#region Valid Parentheses
/* function validParentheses(parens) {
    // your code here ..
    let newStr = parens.replaceAll('()', '');
    if (newStr.includes('()')) {
        return validParentheses(newStr);
    }
    return newStr.length ? false : true;
}

console.log(validParentheses(')')); */
//#endregion

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
