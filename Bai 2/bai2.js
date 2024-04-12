function compareNumbers(a, b) {
    return a - b;
  }
// 1. Return min value from array

function minNumber(array) {
    array.sort();
    return array[0];
}

console.log(minNumber([10,2,3,4,5,6,1]));

// 2. Return second largest value from array

function max2Number(array) {
    array.sort(compareNumbers);
    console.log(array);
    let max = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i] !== max) {
            return array[i];
        }
    }
}
console.log(max2Number([10,2,3,4,5,6,1]));


// 3. Arrange name array from largest

function arrangeNameArray(array) {
    return array.sort().reverse();
}

console.log(arrangeNameArray(['Tuan', 'Nam', 'Hoa']))

// 4. Calculate sum of number divded by 5

function calculateSumDividedBy5(num) {
    let sum = 0;
    for (let i = 0; i <= num; i+=5) {
       sum += i;
    }
    return sum;
}

console.log(calculateSumDividedBy5(10));

// 5. Return array that is remaining of existing array divided by 2

function getRemainders(arr) {
    return arr.map(num => num % 2);
}

console.log(getRemainders([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]));

// 6. Return longest elements from an array of string

function longestString(arr) {
    let maxLen = 0;
    let ret = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].length > maxLen) {
            maxLen = arr[i].length;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === maxLen) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
console.log(longestString(["aba", "aa", "ad", "sdf", "a"]));

// 7. Take a random element from an array

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomElement([1, 2, 3, 4]));
console.log(getRandomElement([1, 2, 3, 4]));
console.log(getRandomElement([1, 2, 3, 4]));


// 8. Shuffle the array

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffleArray([1, 2, 3, 4]));
console.log(shuffleArray([1, 2, 3, 4]));
console.log(shuffleArray([1, 2, 3, 4]));

// 9. Take the same elements from 2 array

function similarity(arr1, arr2) {
    let ret = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                ret.push(arr1[i]);
            }
        }
    }
    return ret;
}
console.log(similarity([1, 2, 3], [1, 2, 4]));

// 10. Take the elements in just one array

function getDifference(arr1, arr2) {
    let ret = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            ret.push(arr1[i]);
        }
    }for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            ret.push(arr2[i]);
        }
    }
    return ret;
}
console.log(getDifference([1, 2, 3], [1, 2, 4]));

// 11. Get child arrays

function sub_String(string) {
    const subsets = [];
    for (let i = 0; i < string.length + 1; i++) {
      for (let j = i + 1; j < string.length + 1; j++) {
        subsets.push(string.slice(i, j));
      }
    }
    return subsets;
  }
console.log(sub_String("hai"))
// 12. Check increasing array

function checkIncreasingArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// 13. Check decreasing odd array

function checkDecreasingOddArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 0) return false;
        if (arr[i] >= arr[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(checkDecreasingOddArray([5, 3, 3, 1, 1]));

// 14. Get keys of object

function getObjectKeys(obj) {
    return Object.keys(obj).join(",");
}

// 15. Get values of object

function getObjectValues(obj) {
    return Object.values(obj).join(",");
}

// 16. check key existance

function checkKeyExistance(obj, key) {
    return(Object.keys(obj).includes(key)); 
}

// 16. Get object length

function getObjectLength(obj) {
    return Object.keys(obj).length;
}

// 17. Get users have age >= 25 and isStatus = true

function getUsers(users) {
    let ret = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 25 && users[i].isStatus) {
            ret.push(users[i]);
        }
    }
    return ret;
}function compareNumbers(a, b) {
    return a - b;
  }
// 1. Return min value from array

function minNumber(array) {
    array.sort();
    return array[0];
}

console.log(minNumber([10,2,3,4,5,6,1]));

// 2. Return second largest value from array

function max2Number(array) {
    array.sort(compareNumbers);
    console.log(array);
    let max = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i] !== max) {
            return array[i];
        }
    }
}
console.log(max2Number([10,2,3,4,5,6,1]));


// 3. Arrange name array from largest

function arrangeNameArray(array) {
    return array.sort().reverse();
}

console.log(arrangeNameArray(['Tuan', 'Nam', 'Hoa']))

// 4. Calculate sum of number divded by 5

function calculateSumDividedBy5(num) {
    let sum = 0;
    for (let i = 0; i <= num; i+=5) {
       sum += i;
    }
    return sum;
}

console.log(calculateSumDividedBy5(10));

// 5. Return array that is remaining of existing array divided by 2

function getRemainders(arr) {
    return arr.map(num => num % 2);
}

console.log(getRemainders([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]));

// 6. Return longest elements from an array of string

function longestString(arr) {
    let maxLen = 0;
    let ret = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].length > maxLen) {
            maxLen = arr[i].length;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === maxLen) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
console.log(longestString(["aba", "aa", "ad", "sdf", "a"]));

// 7. Take a random element from an array

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomElement([1, 2, 3, 4]));
console.log(getRandomElement([1, 2, 3, 4]));
console.log(getRandomElement([1, 2, 3, 4]));


// 8. Shuffle the array

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffleArray([1, 2, 3, 4]));
console.log(shuffleArray([1, 2, 3, 4]));
console.log(shuffleArray([1, 2, 3, 4]));

// 9. Take the same elements from 2 array

function similarity(arr1, arr2) {
    let ret = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                ret.push(arr1[i]);
            }
        }
    }
    return ret;
}
console.log(similarity([1, 2, 3], [1, 2, 4]));

// 10. Take the elements in just one array

function getDifference(arr1, arr2) {
    let ret = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            ret.push(arr1[i]);
        }
    }for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            ret.push(arr2[i]);
        }
    }
    return ret;
}
console.log(getDifference([1, 2, 3], [1, 2, 4]));

// 11. Get child arrays

function sub_String(string) {
    const subsets = [];
    for (let i = 0; i < string.length + 1; i++) {
      for (let j = i + 1; j < string.length + 1; j++) {
        subsets.push(string.slice(i, j));
      }
    }
    return subsets;
  }
console.log(sub_String("hai"))
// 12. Check increasing array

function checkIncreasingArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// 13. Check decreasing odd array

function checkDecreasingOddArray(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] % 2 === 0) return false;
        if (arr[i] <= arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(checkDecreasingOddArray([5, 3, 3, 1, 1]));

// 14. Get keys of object

function getObjectKeys(obj) {
    return Object.keys(obj).join(",");
}

// 15. Get values of object

function getObjectValues(obj) {
    return Object.values(obj).join(",");
}

// 16. check key existance

function checkKeyExistance(obj, key) {
    return(Object.keys(obj).includes(key)); 
}

// 16. Get object length

function getObjectLength(obj) {
    return Object.keys(obj).length;
}

// 17. Get users have age >= 25 and isStatus = true

function getUsers(users) {
    let ret = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 25 && users[i].isStatus) {
            ret.push(users[i]);
        }
    }
    return ret;
}