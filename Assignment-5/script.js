/*
შექმენი <button> და <div> ელემენტები და
მიანიჭეთ საკუთარი უნიკალური id
● <div> - ში ჩაწერე პატარა random ტექსტი
● ღილაკზე დაჭერის შემთხვევაში დამალე
<div> ელემენტი */

const newDiv = document.createElement('div');
const newBtn = document.createElement('button');
const textNode = document.createTextNode('Test Button..');

newDiv.setAttribute('id', 'myDiv');
newBtn.setAttribute('id', 'myBtn');

newBtn.textContent = 'Hidde';

newDiv.append(textNode, newBtn);
document.body.append(newDiv);

newBtn.addEventListener('click', () => {
  newDiv.style.display = 'none';
});

const getMyDiv = document.querySelector('#myDiv');

/*
შექმენი შემდეგი სტრუქტურა JS -ის
გამოყენებით და დაამატე DOM-ში:
<div id=”card”>
<h2>Gandalf</h2>
<a href=”#”>Go to profile</a>
</div> 
*/

const divCard = document.createElement('div');
divCard.setAttribute('id', 'card');

const h2Element = document.createElement('h2');
h2Element.textContent = 'Gandalf';

const aTag = document.createElement('a');
aTag.setAttribute('href', 'https://lotr.fandom.com/wiki/Gandalf');
aTag.setAttribute('target', '_blank');
aTag.textContent = 'Go to profile';

divCard.append(h2Element, aTag);
document.body.append(divCard);

/*
● შექმენი quiz თამაში
● დაწერე რამდენიმე მოკლე შეკითხვა
თავისი სავარაუდო პასუხებით
ᲓᲐᲕᲐᲚᲔბᲐ
● სწორ პასუხზე დაჭერის შემთხვევაში
გაამწვანე პასუხი
● არასწორი პასუხის შემთხვევაში გააწითლე
● ბონუს დავალება:
გამოიტანე ეკრანზე ქულების რაოდენობა
➔ სწორი პასუხის შემთხვევაში დაამატე 1
ქულა
➔ არასწორის შემთხვევაში უცვლელი რჩება
*/

const firstAnswer = document.querySelector('#first-answer');
const secondAnswer = document.querySelector('#second-answer');
const thirdAnswer = document.querySelector('#third-answer');
const scoreEl = document.querySelector('#score');
const nullAnswer = document.querySelector('#null-answer');
const objectAnswer = document.querySelector('#object-answer');
const undefinedAnswer = document.querySelector('#undefined-answer');
let score = 0;

firstAnswer.addEventListener('click', (e) => {
  resetAnswersColor();
  nullAnswer.style.color = 'red';
});

secondAnswer.addEventListener('click', (e) => {
  resetAnswersColor();
  objectAnswer.style.color = 'green';
  score++;
  scoreEl.textContent = score;
});

thirdAnswer.addEventListener('click', (e) => {
  resetAnswersColor();
  undefinedAnswer.style.color = 'red';
  scoreEl;
});

function resetAnswersColor() {
  nullAnswer.style.color = 'black';
  objectAnswer.style.color = 'black';
  undefinedAnswer.style.color = 'black';
}
