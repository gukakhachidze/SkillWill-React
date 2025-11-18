/*
● შექმენი button, რომელზე დაწკაპების
შემდეგაც გაიხსნება მოდალი და მოდალის
უკან შავი/გამჭვირვალე background */

const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  modal.style.display = 'none';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  modal.style.display = 'none';
});

/*
● შექმენი input, სადაც მომხმარებელს
შესაძლებლობა ექნება შეიტანოს “:”- ით
ერთმანეთისგან გამოყოფილი რიცხვები,
average ღილაკზე დაწკაპების შემდეგ
დაითვალე ამ რიცხვების საშუალო და
გამოუტანე ეკრანზე
● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს */

const userInput = document.querySelector('#user-input');
const btnCalculate = document.querySelector('.calculate-btn');
const outputText = document.createElement('p');
const divAvg = document.querySelector('.avg-calculator');

btnCalculate.addEventListener('click', () => {
  const inputArray = userInput.value.split(':');
  if (Array.isArray(inputArray)) {
    let sum = 0;

    for (const num of inputArray) {
      sum += parseInt(num);
    }

    Number.isNaN(sum)
      ? (outputText.textContent = 'შემოიტანე ამ ფორმატში: 1:2:3:4:5')
      : (outputText.textContent = `საშუალო: ${sum / inputArray.length}`);
  } else {
    outputText.textContent = 'შემოიტანე ამ ფორმატში: 1:2:3:4:5';
  }

  divAvg.append(outputText);
});

/*
● input-ში მომხმარებელი ჩაწერს ფერს და
button ღილაკზე დაწკაპების შემდეგ body-ს
background შეიცვლება ჩაწერილ ფერად
● (ფერები რომლის ჩაწერაც შეუძლია: red,
blue, green, black, white)
● თუ სხვა ფერი ჩაწერა, გამოუტანე
შეტყობინება alert-ის საშუალებით */

const btnColor = document.querySelector('.color-btn');
const colorInput = document.querySelector('#input-color');
const body = document.querySelector('body');
const pText = document.querySelector('.alert-text');

btnColor.addEventListener('click', () => {
  switch (colorInput.value.toLowerCase()) {
    case 'red':
      body.style.backgroundColor = 'red';
      break;

    case 'blue':
      body.style.backgroundColor = 'blue';
      break;

    case 'green':
      body.style.backgroundColor = 'green';
      break;

    case 'black':
      pText.style.color = 'white';
      body.style.backgroundColor = 'black';
      break;

    case 'white':
      pText.style.color = 'black';
      body.style.backgroundColor = 'white';
      break;

    default:
      alert('მხოლოდ ეს ფერები: red, blue, green, black white');
      break;
  }
});
