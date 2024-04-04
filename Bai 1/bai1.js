// 1.check included string

function checkString(str) {
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

function copyString(str) {
  for (let i = 0; i < 10; i++) {
    str += str;
  }
  return str;
}

// 4.copy string 5 times with -

function copyString2(str) {
  for (let i = 0; i < 5; i++) {
    str += "-";
  }
  return str;
}

// copy string n times with -

function copyString3(str, n) {
  for (let i = 0; i < n; i++) {
    str += "-";
  }
  return str;
}

// 6.reverse string

function reverseString(str) {
    return str.split("").reverse().join("");
}

// 7.check symmetric string

function checkSymmetricString(str) {
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
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
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

// 11.check prime number

function checkPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num/2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 12.calculate sum of prime number smaller than a given number

function checkSumOfPrimeNumber(num) {
  let sum = 0;
  for (let i = 2; i < num; i++) {
    if (checkPrimeNumber(i)) {
      sum += i;
    }
  }
  return sum;
}

// 13.calculate sum of divisor

function calculateSumOfDivisor(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

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
  str.push(str.slice(index));
  str.join('');
  let ret = Number(str);
  
  return ret;
}

function run () {
  let num = 423560989;
  arrange(num);
  console.log(str);
}

