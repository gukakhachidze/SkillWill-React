/*
დაწერე ფუნქცია, რომელიც მიიღებს a და b
პარამეტრებს და დააბრუნებს ტექსტს “ტოლია” თუ a უდრის b-ს, 
ხოლო წინააღმდეგ შემთხვევაში, დააბრუნებს “არ არის ტოლი” 
*/

function isEqual(a, b) {
  if (a === b) {
    return 'A and B are equal.';
  } else {
    return 'A and B are not equal.';
  }
}

console.log(isEqual(5, 5));
console.log(isEqual('5', 5));

/* 
დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას
ფარენჰეიტებში და დააბრუნებს ტემპერატურას ცელსიუსში 
*/

const fahrenheitToCelsius = function (farhrenheit) {
  if (typeof farhrenheit !== 'number') {
    return false;
  } else {
    const celsius = (farhrenheit - 32) / 1.8;
    return `${farhrenheit}°F = ${celsius}°C`;
  }
};

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius('test'));

/*
● დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს a (პირველი რიცხვი), b (მეორე
რიცხვი) და operation (+, -, *, /) და
დააბრუნებს ახალ მნიშვნელობას,
რომელიც მიიღება ამ ორ რიცხვზე operation
ცვლადში განსაზღვრული ოპერაციით

● თუ a და b არ არიან რიცხვები, ან თუ
operation ცვლადში არის უცნობი, ოპერაცია
დააბრუნე - false

*/

const miniCalculator = function (a, b, operation) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }

  if (operation === '+') {
    return a + b;
  } else if (operation === '-') {
    return a - b;
  } else if (operation === '*') {
    return a * b;
  } else if (operation === '/' && a !== 0 && b !== 0) {
    return a / b;
  } else {
    return false;
  }
};

console.log(miniCalculator(100, 5, '/'));
