const tipButtons = document.querySelectorAll('.button');
const resetButton = document.querySelector('#reset-button');
const selectTip = document.querySelector('#buttons');
const billValue = document.querySelector('#billValue');
const people = document.querySelector('#number');

let tipPct, tip, tipAmount, total, custom, bills, person;

const resetCalc = () => {
  billValue.value = '';
  tipPct = 0;
  tip;
  people.value = '';
  tipAmount = document.querySelector('#tip-amount');
  tipAmount.textContent = '00.00';
  total = document.querySelector('#total');
  total.textContent = '00.00';
  custom = document.querySelector('#custom');
  custom.value = 'Custom';
  for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].classList.remove('active');
  }
};

resetCalc();

for (let i = 0; i < tipButtons.length; i++) {
  tipButtons[i].addEventListener('click', function (event) {
    event.preventDefault();
    tipButtons[i].classList.toggle('active');

    if (i === 4) {
      for (let x = 3; x >= 0; x--) {
        tipButtons[x].classList.remove('active');
      }
    } else if (i === 0) {
      for (let x = 1; x <= 4; x++) {
        tipButtons[x].classList.remove('active');
      }
    } else if (i === 1) {
      for (let x = 2; x <= 4; x++) {
        tipButtons[i - 1].classList.remove('active');
        tipButtons[x].classList.remove('active');
      }
    } else if (i === 2) {
      tipButtons[i - i].classList.remove('active');
      tipButtons[i - 1].classList.remove('active');
      tipButtons[i + 1].classList.remove('active');
      tipButtons[i + i].classList.remove('active');
    } else {
      tipButtons[i - i].classList.remove('active');
      tipButtons[i - 2].classList.remove('active');
      tipButtons[i - 1].classList.remove('active');
      tipButtons[i + 1].classList.remove('active');
    }

    tipPct = Number(tipButtons[i].value);
    showResults();
  });
}

custom.addEventListener('click', function () {
  custom.value = '';
  for (let i = 0; i < tipButtons.length; i++) {
    tipButtons[i].classList.remove('active');
  }
});

custom.addEventListener('change', function () {
  tipPct = Number(custom.value);
  showResults();
});

billValue.addEventListener('change', function () {
  bills = Number(billValue.value);
  showResults();
});

people.addEventListener('change', function () {
  person = Number(people.value);
  if (person <= 0) {
    alert('Please insert a number higher than 0');
  } else {
    showResults();
  }
});

const showResults = () => {
  tip = bills * (tipPct / 100);
  tipAmount.textContent = `$${(tip / person).toFixed(2)}`;
  total.textContent = `$${(bills / person + tip / person).toFixed(2)}`;
  console.log(tipPct, bills, person);
};

resetButton.addEventListener('click', resetCalc);
