/*
დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). 
ფუნქციამ უნდა დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და მეორე პარამეტრის ჯამი, 
ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი
*/

function myFunc(firstNumber, secondNumber, ...args) {
  let result = [];
  let multipliedSum = 1;

  for (const number of args) {
    multipliedSum *= number;
  }

  result[0] = firstNumber + secondNumber;
  result[1] = multipliedSum;

  return result;
}

console.log(myFunc(1, 2, 2, 3, 4, 5));

/*
დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. 
დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს cityს. 
გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined 
*/

const user = {
  fullName: 'Guka Khachidze',
  age: 30,
  banks: [
    { name: 'TBC', address: { country: 'Georgia', city: 'Rustavi' } },
    { name: 'CREDO', address: { country: 'Georgia', city: 'Borjomi' } },
    { name: 'BOG', address: { country: 'Georgia', city: 'Tbilsi' } },
  ],
};

function getUserBankAddress(person) {
  const {
    fullNamem,
    age,
    banks: [fistBank, secondBank, thirdBank],
  } = person;

  if (thirdBank !== undefined) {
    const {
      address: { city },
    } = thirdBank;

    return city;
  } else {
    return undefined;
  }
}

console.log(getUserBankAddress(user));

/*
● დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და 
დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს 

● გაითვალისწინე, რომ თუ  ობიექტში კიდევ სხვა 
ობიექტებია იმათი ასლებიც უნდა შეიქმნას 

● გამოიყენეთ (...) ოპერატორი
*/

const person = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    zipCode: '12345',
  },
  contact: {
    email: 'alice@example.com',
    phone: '555-123-4567',
  },
};

const newObject = (obj) => {
  let newObj = {};

  for (const prop in obj) {
    newObj = {
      ...obj,
      [prop]: { ...obj[prop] },
    };
  }

  return newObj;
};

const newB = newObject(person);
person.contact.email = 'original ---';
newB.contact.email = 'mutated ----';

console.log(newB);
console.log(person);
