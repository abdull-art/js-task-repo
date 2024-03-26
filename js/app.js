const sum = (x, y) => {
  return x + y;
};

// console.log(sum(2, 3))

const prod = (x, y) => {
  return x * y;
};

// console.log(prod(2, 3))

// --- 👉 This program will calculate the area and circumference of a Circle 👈 ---
// --- 👉 It has an argument and it has the use of template literal 👈 ---

const areaOfCircle = (r) => {
  area = Math.round(3.14 * r ** 2);
  circumference = Math.round(2 * 3.14 * r);
  return `Area Of Circle: ${area} and the Circumference: ${circumference}`;
};

// console.log(areaOfCircle(8))

// --- 👉 This program will give max & min number out of three given numbers 👈 ---

const maxAndMin = (x, y, z) => {
  if (x > y && x > z) {
    return `${x} is max`;
  } else if (x < y && y > z) {
    return `${y} is max`;
  } else return `${z} is max`;
};

// console.log(maxAndMin(2, 5, 4))

// --- 👉 This program will output whether the given number is even or odd 👈 ---

const evenOrOdd = (x) => {
  if (x % 2 == 0) {
    return "The number is even";
  } else return "The number is odd";
};

// console.log(evenOrOdd(5))

// 👉 program to check if a number is prime or not by using a function 👈

const prime = (number) => {
  let isPrime = true;

  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  } else {
    console.log("The number is not a prime number.");
  }
};

// prime(2)

// 👉 program to find the factorial of a number by using a function 👈 ---

const fact = (n) => {
  if (n == 0) {
    return "The factorial of 0 is 1";
  } else if (n == 1) {
    return `${n}`;
  } else return factorialCalc(n);
};

const factorialCalc = (numb) => {
  let factorial = numb;
  for (let i = 1; i < numb; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

// console.log(fact(7))

// 🌟 Arrays 🌟

let fruits = ["🍎", "🍊", "🥭", "🍉"];
// console.log(fruits)
fruits.push("🍐");
fruits.push("🍇");
// console.log(fruits)
fruits.unshift("🍫");
// console.log(fruits);
// console.log(fruits.slice(3, 6))
// console.log(fruits.indexOf('🍊'))

// 👉 OBJECTS 👈

const person = {
  name: "Abdul",
  shirtColor: "Black",
};
// console.log(person);
person.age = 25;
person.phoneNumber = "1-22-333-4444";
// console.log(person);

// ⚙ PROBLEMS RELATED OBJECT BY CREATING 'METHODS' AND 'FUNCTIONS' ES6 👈👈👈
const mySelf = (name, bornedYear, assets, liabilities) => {
  const me = {
    name: name,
    bornedYear: bornedYear,
    age: function (currentYear) {
      currentYear = 2024;
      return currentYear - this.bornedYear;
    },
    assets: assets,
    liabilities: liabilities,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
  };
  return `Hi, my name is ${
    me.name
  } and my age is ${me.age()} and my net worth is ${me.netWorth()} Pkr`;
};
// console.log(mySelf('Abdul', 1987, 50000, 5000));

// 👉 TIP CALCULATOR WITH OBJECT

const myTipCalc = (
  name,
  yearOfBirth,
  profession,
  assets,
  liabilities,
  restaurant,
  costOfFood,
  tipAmount
) => {
  let obj = {
    name: name,
    yearOfBirth: yearOfBirth,
    age: function (currentYear) {
      currentYear = 2024;
      return currentYear - this.yearOfBirth;
    },
    profession: profession,
    assets: assets,
    liabilities: liabilities,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
    restaurant: restaurant,
    costOfFood: costOfFood,
    tipAmount: tipAmount,
    tip: function (tipPercentage) {
      tipPercentage = (tipAmount / costOfFood) * 100;
      return tipPercentage;
    },
  };
  return `Hi, my name is ${
    obj.name
  } and my age is ${obj.age()} and by profession I'm a ${
    obj.profession
  } and my net worth is ${obj.netWorth()} and I went to a restaurant named ${
    obj.restaurant
  } and I tipped there, and the tip I give is almost ${obj.tip()}%`;
};

// console.log(myTipCalc('Abdul Moiz', 2000, 'Web Developer', 50000, 7000, 'Red Onion', 200, 100));

// ➿ LOOPS ➿

// --> Function that counts how many times a letter gets repeated <--
const letterCounter = (phrase) => {
  // console.log(phrase);
  let counter = {};
  for (const letter of phrase) {
    if (letter in counter) {
      counter[letter]++;
    } else counter[letter] = 1;
  }
  return counter;
};
// console.log(letterCounter("hahaha!"));

// 🅿 --> Function that counts how many times a word gets repeated <-- 🅿
const wordCounter = (phrase) => {
  console.log(phrase);
  let counter = phrase.split(" ");
  for (const word of counter) {
    if (word in counter) {
      counter[word]++;
    } else counter[word] = 1;
  }
  return counter;
};
// console.log(wordCounter("like share and subscribe and like again"));

// 🅿 --> A Function that print the greatest number from a passing array <-- 🅿
const maxNumber = (arrayOfNumbers) => {
  let max = 0;
  for (const number of arrayOfNumbers) {
    if (max < number) {
      max = number;
    }
  }
  return `The maximum number from [${arrayOfNumbers}] is ${max}`;
};
// console.log(maxNumber([1, 4, 3, 2]));

// 🅿 --> Function that returns the seconds in the given hours <-- 🅿
const totalSeconds = (hours) => {
  let totalSecondsInAnHour = 3600;
  if (hours === 1) {
    return totalSecondsInAnHour;
  } else return totalSecondsInAnHour * hours;
};
// console.log(totalSeconds(7));

// The 50-30-20 strategy is a simple way to budget
// which involves spending 50% of after-tax income on needs,
// 30% after-tax income on wants,
// 20% after-tax income on savings or paying off debt.

// Create a function that takes an income amount and returns an OBJECT with what they have for needs, wants, and savings

function savingsStrategy(income) {
  const calculatePercentage = (number) => {
    let decimalOfPercentage = number / 100;
    return decimalOfPercentage;
  };
  const budget = {
    Needs: calculatePercentage(50) * income,
    Wants: calculatePercentage(30) * income,
    Savings: calculatePercentage(20) * income,
  };
  return `Needs : ${budget.Needs}, Wants: ${budget.Wants}, Savings: ${budget.Savings}`;
}
// console.log(savingsStrategy(25000));

// Ex:
// Input: fiftyThirtyTwenty(10000)
// Output: { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

/* --> 🅿
 Create a function that takes the month and year (as integers)
 and returns the number of DAYS in that month

 Hints:
 Don't forget about leap year!
 Keep in mind which month has 30 days, 31 days, and 28 days
 Use everything you learned to get to the answer
 <--🅿 */

const daysInMonth = (month, year) => {
  let y = year;
  let m = month;

  if (y % 4 == 0 && m == 2) {
    return 29;
  } else if (y % 4 != 0 && m == 2) {
    return 28;
  } else if (m <= 7 && m % 2 != 0) {
    return 31;
  } else if (m > 7 && m % 2 == 0) {
    return 31;
  } else return 30;
};
// console.log(daysInMonth(2, 2018));
// console.log(daysInMonth(4, 654));
// console.log(daysInMonth(7, 2020));

// Example:
// daysInMonth(2,2018) -> 28
// days(4,654) -> 30
// days(2,2020) -> 29

const letterCount = (phrase) => {
  let result = [];
  for (const letter of phrase) {
    result.push(letter);
    if (letter in result) {
      result[letter]++;
    } else result[letter] = 1;
  }
  return result;
};
// console.log(letterCount("haha"));

// ✅ Write a program that sorts an array in ascending order ✅
const sortArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
};
// sortArray([5, 6, 4, 3, 2, 7, 1]);

/*
✅✅
 --> Implicit return with higher order functions 
 --> Higher order functions are those who take function as an argument and returns back an array
 --> Sometimes they work on the basis of conditions or conditional operators too, to output the result ✅✅
*/
const array = [1, 2, 3, 4].map((index) => index >= 2);
// console.log(array);

const anotherArray = [3, 5, 6, 7].filter((index) => index > 3 && index < 6);
// console.log(anotherArray);

// 🎮🕹 --> BUILDING A RANDOM NUMBER GUESS GAME <--
const guessNumber = () => {
  let userInput = prompt("Enter a number between 1 - 5");
  let guessedNumber = Math.round(Math.random() * 5);
  alert("The number was " + guessedNumber);
  if (userInput == guessedNumber) {
    return alert("You guess the right number");
  } else return alert("try again");
};
// guessNumber();

// ✅ JavaScript program to swap pairs of adjacent digits of a given integer of even length. ✅

const swappingAdjacentPairsInArray = (array) => {
  let countI = 0;
  let countJ = 1;
  if (array.length % 2 == 0) {
    for (let i = countI; i < array.length; i++) {
      for (let j = countJ; j == i + 1; j++) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        countI = countJ + 1;
        countJ = countI + 1;
      }
    }
    return array;
  }
};
// console.log(swappingAdjacentPairsInArray([1, 2, 3, 4, 5, 6]));

// ✅ JavaScript program to create a new string from a given string by changing the position of the first and last characters.The string length must be broader than or equal to 1 ✅

const newString = (string) => {

}