/* 
● მოცემულია მასივი [{name: 'Temo', age: 25},
{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
● დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს user - ების მასივს და დააბრუნებს
ყველაზე პატარა ასაკის მქონე ადამიანის სახელს */

const users = [
  { name: 'Temo', age: 25 },
  { name: 'Lasha', age: 21 },
  { name: 'Ana', age: 28 },
];

function getYoungestUserName(userArray) {
  if (userArray.length === 0) {
    return null;
  }

  let age = userArray[0].age;
  for (let i = 0; i < userArray.length; i++) {
    if (age < userArray[i].age) {
      age = userArray[i].age;
    }
  }

  return age;
}
const userAge = getYoungestUserName(users);
console.log(userAge);

/* 
● დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და 
დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს */

const person = {
  firstName: 'Guka',
  lastName: 'Khachidze',
  age: 30,
  isMarried: false,
  printFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

function newObjCreator(user) {
  const newUser = {};

  for (const property in user) {
    newUser[property] = user[property];
  }

  return newUser;
}

const newPerson = newObjCreator(person);
console.log(newPerson);

person.firstName = 'Jemali';

console.log(newPerson);
console.log(person);

/*
● დაწერე პროგრამა, სადაც ორი a და b მომხმარებლები აგორებენ 
კამათელს მანამ, სანამ არ გაგორდება, რომელიც
უფრო ნაკლებ ცდაში გააგორებს სამიანს ის არის გამარჯვებული 
*/

function diceRoller(firstPlayer, secondPlayer) {
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  let aTries = 0;
  let bTries = 0;
  let aNumber = 0;
  let bNumber = 0;

  while (aNumber !== 3) {
    aNumber = rollDice();
    aTries++;
    console.log(`${firstPlayer} აგორებს: ${aNumber}`);
  }

  console.log(`${firstPlayer} სამიანი გააგორა ${aTries}-ე ცდაზე!\n`);

  while (bNumber !== 3) {
    bNumber = rollDice();
    bTries++;
    console.log(`${secondPlayer} აგორებს: ${bNumber}`);
  }

  console.log(`${secondPlayer} სამიანი გააგორა ${bTries}-ე ცდაზე!\n`);

  if (aTries < bTries) {
    console.log(`გამარჯვებულია ${firstPlayer}!`);
  } else if (bTries < aTries) {
    console.log(`გამარჯვებულია ${secondPlayer}!`);
  } else {
    console.log('ფრე!');
  }
}
diceRoller('a', 'b');
