const tipButtons = document.querySelectorAll('.button');
const resetButton = document.querySelector('#reset-button');
const selectTip = document.querySelector('#buttons');
let billValue, tipPct, tip, people, tipAmount, total, custom;

const resetCalc = () => {
  billValue = document.querySelector('#billValue');
  billValue.value = '';
  tipPct = 0;
  tip;
  people = document.querySelector('#number');
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
    console.log(tipPct, billValue, people);
    const removeActive = () => {
      tipButtons[{}].classList.remove('active');
    };
    // while(i>=0 && i<=4){
    //   removeActive()
    // }
  });
  // while(tipButtons[i].classList.contains('active')){}
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
  console.log(tipPct, billValue, people);
});

billValue.addEventListener('change', function () {
  billValue = Number(billValue.value);
  console.log(tipPct, billValue, people);
  showResults();
});

people.addEventListener('change', function () {
  people = Number(people.value);
  console.log(tipPct, billValue, people);
  showResults();
});

const showResults = () => {
  tip = billValue * (tipPct / 100);
  tipAmount.textContent = `$${(tip / people).toFixed(2)}`;
  total.textContent = `$${(billValue / people + tip / people).toFixed(2)}`;
};

resetButton.addEventListener('click', resetCalc);
