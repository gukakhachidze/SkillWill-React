/*
● დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), 
ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს 
● არ გამოიყენო string.replace() ფუნქცია
*/

function textChanger(text, valueToReplace, valueToReplaceWith) {
  return text.split(valueToReplace).join(valueToReplaceWith);
}
console.log(textChanger('Hello Guka, How are you?', 'Guka', 'Jonny'));

/* 
დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას), 
მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას
*/

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(
  capitalizeWords(
    `to be or not to be, all the world's a stage, and some are born great, some achieve greatness, and some have greatness thrust upon them`
  )
);

/*
● დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით 
● მაგალითად, ჩავთვალოთ, რომ გვაქვს [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}]. 
ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}] 
● შეგიძლია გამოიყენო sort() ფუნქცია
*/
function sortUsersByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

const users = [
  { name: 'Lasha', age: 30 },
  { name: 'Saba', age: 20 },
  { name: 'Nino', age: 25 },
];

console.log(sortUsersByAge(users));
