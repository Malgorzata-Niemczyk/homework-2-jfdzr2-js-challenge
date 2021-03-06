// Zad 1
const arrA = [9, 3, '7', '3'];
const arrB = ['5', '0', 9, 3, 2, 1, '9', 6, 7];
const arrC = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];

const toNumArrA = arrA.map(Number);
//console.log(toNumArrA);
const toNumArrB = arrB.map(Number);
//console.log(toNumArrB);
const toNumArrC = arrC.map(Number);
//console.log(toNumArrC)

//Zad 1 - część 1
function sumElements(arr) {
  const sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum;
};

console.log(sumElements(toNumArrA));
console.log(sumElements(toNumArrB));
console.log(sumElements(toNumArrC));

//Zad 1 - część 2
function sumNumbers(arr) {
  const numbers = arr.filter(value => {
    if (typeof(value) === 'number') {
      return value;
    }
  })
  //console.log(numbers)
  
  let total = 0;
  for (let num in numbers) {
      total += numbers[num]
  }
  return total
};

console.log(sumNumbers(arrA));
console.log(sumNumbers(arrB));
console.log(sumNumbers(arrC));



// Zad 2
function getInitials(name) { 
    const nameArr = name.split(' ');

    const firstInit = nameArr.shift().charAt(0).toUpperCase();
    const lastInit = nameArr.pop().charAt(0).toUpperCase();

    return `${firstInit}.${lastInit}.`;
}

getInitials('Harry Potter');



// Zad 3
const mixedArr1 = [1, 2, 3 ,4, 5];
const mixedArr2 = [1,-2, 3, 4, 5];
const mixedArr3 = [-1, -2, -3, -4, -5];
const mixedArr4 = [-1, 2, 3, 4,-5];
const emptyArr = [];

function sumPositives(arr) {
  const positiveNum = arr.filter(value => {
    return (value > 0);
  })
  
  const sum = positiveNum.reduce((a, b) => {
    return (a + b);
  });
  
  return sum;
};

console.log(sumPositives(mixedArr1));
console.log(sumPositives(mixedArr2));
console.log(sumPositives(mixedArr4));

//BONUS
function countPositivesAndSumNegatives(numbers) {
  // returns [positivesCount, negativeSum]
  const positives = [];
  const negatives = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positives.push(numbers[i]);
    } else {
      negatives.push(numbers[i]);
    }
  }
  
  // console.log(positives);
  // console.log(negatives);

 const positivesCount = positives.length;

 const negativeSum = negatives.reduce((a, b) => {
     return (a + b)
   });

 return `
    Sum of negative numbers: ${negativeSum},
    The count of the positive numbers: ${positivesCount}
  `
};

console.log(countPositivesAndSumNegatives(mixedArr2));
console.log(countPositivesAndSumNegatives(mixedArr3));
console.log(countPositivesAndSumNegatives(mixedArr4));



// Zad 4
var students = [
  {name: 'Janusz', tasksDone: 150, hoursSpent: 160},
  {name: 'Karyna', tasksDone: 1, hoursSpent: 1},
  {name: 'Krystek', tasksDone: 100, hoursSpent: 80},
  {name: 'Seba', tasksDone: 200, hoursSpent: 40},
  {name: 'Dagmara', tasksDone: 50, hoursSpent: 100}
];

 var requirements = {
  minHoursSpent: 80,
  minTasksDone: 100
};

//console.log(students[2].tasksDone)

function praiseHardworkersBashLazyStudents() {
  let praisedStudents = [];
  let bashedStudents = [];

  for (let student of students) {
    switch (true) {
      case (student.tasksDone >= 100 && student.hoursSpent >= 80):
        praisedStudents.push(student.name);
        break;
      default:
        bashedStudents.push(student.name);
    };
  };

  return `
      ${praisedStudents} - gratulacje, ciężka praca popłaca! 
      ${bashedStudents} - DO ROBOTY LENIE!
    `
}

praiseHardworkersBashLazyStudents();


// Zad 5
const arr1 = [1, 2]
const arr2 = [3, 4]
const newArr = arr1.concat(arr2)

// console.log(newArr)

const sumArrays = newArr.reduce((a, b) => {
  return a + b
})

console.log(sumArrays);



// Zad 6
function canYouPlayBanjo(name) {
  if (name.startsWith('R') || name.startsWith('r') || name.includes('r')) {
    console.log(`${name} umie grać na banjo :)`)
  } else {
    console.log(`${name} nie umie grać na banjo :(`)
  }
}

canYouPlayBanjo('Tomek');
canYouPlayBanjo('Darek');
canYouPlayBanjo('Robert');
canYouPlayBanjo('Kasia');
canYouPlayBanjo('radek');



// Zad 7
function reverseString(str) {
  return str.split('').reverse('').join('');
};

reverseString('world');



// Zad 8
function enough(capacity, onBoard, waiting) {

  const hasSpace = `${capacity - (onBoard + waiting)}`;

  if (hasSpace >= 0) {
    return `${hasSpace}, all ${waiting} passengers can get in.`;
  } else {
    const posValue = Math.abs(hasSpace);
    return `${posValue}, ${posValue} out of ${waiting} won't get in.`;
  };
};

console.log(enough(10, 5, 5));
console.log(enough(10, 2, 5));
console.log(enough(10, 7, 5));


// Zad 9
const luckyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyTable = luckyNums.map(num => {
    return `${num} * 5 = ${num * 5}`;
  }).join('\n')

console.log(multiplyTable)



// Zad 10
function canDivideBy(initNum, divisor1, divisor2) {
 if (initNum % divisor1 === 0 && initNum % divisor2 === 0) {
    return true;
 } else {
   return false;
 };
};

console.log(canDivideBy(-12, 2, -6));
console.log(canDivideBy(-12, 2, -5));


// Zad 11
const age = [82, 15, 6, 38, 35]

function ageDifferences() {
  const theOldest = Math.max(...age);
  console.log(`Najstarszy domownik ma ${theOldest} lat.`)

  const theYoungest = Math.min(...age);
  console.log((`Najmłodszy domownik ma ${theYoungest} lat.`))

  const ageDiff = `${theOldest}` - `${theYoungest}`
  console.log(`Różnica wieku między najstarszym a najmłodszym domownikiem wynosi ${ageDiff} lat.`)
}

ageDifferences()


// Zad 12
const numArray1 = [2, 3, 1];
const numArray2 = [5, 10, 14];

function gimmeMiddleIndex(arr) {
  const theMiddle = Math.round(arr.length -1) / 2;

  console.log(theMiddle);
}

gimmeMiddleIndex(numArray1);
gimmeMiddleIndex(numArray2);



// Zad 13
const months = [
  { month: 'January', firstName: 'The Evil' },
  { month: 'February', firstName: 'The Awkward' },
  { month: 'March', firstName: 'The Vile' },
  { month: 'April', firstName: 'The Cruel' },
  { month: 'May', firstName: 'The Trashy' },
  { month: 'June', firstName: 'The Despicable' },
  { month: 'July', firstName: 'The Embarrassing' },
  { month: 'August', firstName: 'The Disreputable' },
  { month: 'September', firstName: 'The Atrocious' },
  { month: 'October', firstName: 'The Twirling' },
  { month: 'November', firstName: 'The Orange' },
  { month: 'December', firstName: 'The Terrifying' }
]

const days = [
  { day: 0, lastName: 'Mustache' },
  { day: 1, lastName: 'Pickle' },
  { day: 2, lastName: 'Hood Ornament' },
  { day: 3, lastName: 'Raisin' },
  { day: 4, lastName: 'Recycling Bin' },
  { day: 5, lastName: 'Potato' },
  { day: 6, lastName: 'Tomato' },
  { day: 7, lastName: 'House Cat' },
  { day: 8, lastName: 'Teaspoon' },
  { day: 9, lastName: 'Laundry Basket' },
]

function whatsMySuperVillainName(date) {
  
  let month = months[date.getMonth()].firstName;
  // console.log(month)

  let day = days[date.getDate()].lastName;
  // console.log(day)

  return `Your super villain name is: ${month} ${day}`;
};

console.log(whatsMySuperVillainName(new Date('May 3')));
console.log(whatsMySuperVillainName(new Date('December 9')));
console.log(whatsMySuperVillainName(new Date('February 5')));

// Zad 14
const teacher1 = ["a", "a", "b", "b"];
const student1 = ["a", "a", "b", "d"];

const teacher2 = ["b", "c", "b", "a"];
const student2 = ["",  "c", "a", "c"];

function checkExam(studentArr, teacherArr) {
  let examScore = 0;

  for (i = 0; i < studentArr.length; i++) {
    if ( studentArr[i] === teacherArr[i]) {
      examScore = examScore + 2;
    } else if (studentArr[i] !== teacherArr[i] && studentArr[i] !== "") {
      examScore = examScore -1;
    } else /* (studentArr[i] !== teacherArr[i] && studentArr[i] == "") */ { 
      examScore = 0;
    }
  }
  return `Your exam score is: ${examScore}`;
};

console.log(checkExam(student1, teacher1));
console.log(checkExam(student2, teacher2));


// Zad 15
const people = [
  { name: 'Kursant czytający ten tekst', wasNice: true },
  { name: 'Jack Mehoff', wasNice: false },
  { name: 'Santa', wasNice: true }
]; 

function getNiceNames() {
  let nicePeople = [];

  for (i = 0; i < people.length; i++) {
    if (people[i].wasNice === true) {
      nicePeople.push(people[i].name);
    } else {
      [];
    };
  };

  return `The list of nice people: ${nicePeople}.`
};

getNiceNames()


function getNaughtyNames() {
  let naughtyPeople = [];

  for (let person of people) {
    if (person.wasNice === false) {
      naughtyPeople.push(person.name);
    } else {
      [];
    };
  };

  return `The list of naughty peope: ${naughtyPeople}.`
};

getNaughtyNames()

//proponowane rozwiązanie Zad 15 - by obie funckjce napisać w jednej:
function getNiceAndNaughtyNames() {
  let nicePeople = [];
  let naughtyPeople = [];


  for (i = 0; i < people.length; i++) {
    
    switch (true) {
      case (people[i].wasNice === true):
        nicePeople.push(people[i].name);
        break;
      case (people[i].wasNice === false):
        naughtyPeople.push(people[i].name);;
        break;
      default:
        return [];
    }
  }

  return `
    List of nice people: ${nicePeople}.
    List of naughty people: ${naughtyPeople}.
  `
};

getNiceAndNaughtyNames()