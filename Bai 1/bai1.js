// 1.check included string

function checkStringExist(str) {
  if (str.includes("hello")) {
    return true;
  } else {
    return false;
  }
}

// 2.shorten string with first 8 characters and append ...

function shortenString(str) {
  if (str.length <= 8) {
    return str;
  } else {
    return str.slice(0, 8) + "...";
  }
}

// 3.copy string 10 times

function repeatString10Times(str) {
  let ret;
  for (let i = 0; i < 10; i++) {
    ret += str;
  }
  return str;
}

// 4.copy string 5 times with -

function repeatString(str) {
  let ret = str;
  for (let i = 0; i < 9; i++) {
    ret += '-' + str;
  }
  return ret;
}

// copy string n times with -

function copyString3(str, n) {
  let ret = str;
  for (let i = 0; i < n-1; i++) {
    ret += '-' + str;
  }
  return str;
}

// 6.reverse string

function reverseString(str) {
    return str.split("").reverse().join("");
}

// 7.check symmetric string

function checkSymmetricString(str) {
  str = str.toLowerCase().replace(/ /g, "");
  return str === str.split("").reverse().join("");
}

// 8.check capital string

function checkCapitalString(str) {
  if (str === str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

// 9.calculate globular volume

function calculateGlobularVolume(r) {
  return 4 / 3 * Math.PI * r ** 3;
}

// 10.calculate sum of numbers between a and b, include a and b

function calculateSum(a, b) {
  if (a > b) {
    let temp = a;
    b = temp;
    a = b;
  }
  if (a === b || b - a === 1) return 0;

  let sum = 0;
  for (let i = a+1; i < b; i++) {
    sum += i;
  }
  return sum;
}
console.log(calculateSum(1,3));

// 11.check prime number

function checkPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num/2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrimeNumber(4));

// 12.calculate sum of prime number smaller or equal than a given number

function checkSumOfPrimeNumber(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (checkPrimeNumber(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(checkSumOfPrimeNumber(9));

// 13.calculate sum of divisor

function calculateSumOfDivisor(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  sum += num;

  return sum;
}
console.log(calculateSumOfDivisor(10));
// 14. sắp xếp các chữ số trong số nguyên để tạo ra số nhỏ nhất

function arrange(num) {
  let str = num.toString().split('');
  str.sort();

  //find the first different 0 in the string
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i]!== '0') {
      index = i;
      break;
    }
  }
  [str[0],str[index]] = [str[index],str[0]]
  return Number(str.join(''));
}

console.log(arrange(537511100000));

