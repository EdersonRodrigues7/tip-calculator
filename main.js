let tipPct = 0;

document.querySelector('.button').addEventListener('click', function () {
  tipPct = document.querySelector('.button').value;
  console.log(tipPct);
});

let people = 0;

let billValue = 0;

document.querySelector('#billValue').addEventListener('change', function () {
  billValue = document.querySelector('#billValue').value;
  people = document.querySelector('#number').value;
  let tip = billValue * (tipPct / 100);

  document.querySelector('#tip-amount').textContent = `$${tip / 5}`;
  document.querySelector('#total').textContent = `$${billValue / 5 + tip / 5}`;

  console.log(billValue, people);
});

document.querySelector('#number').addEventListener('change', function () {
  people = document.querySelector('#number').value;
});
