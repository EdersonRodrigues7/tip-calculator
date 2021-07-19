const billValue = document.querySelector('#billValue').value;
console.log(document.querySelector('#billValue').value);
const tipPct = 15;
const people = document.querySelector('#number').value;
console.log(document.querySelector('#number').value);

const calcTip = bill => {
  let tip = bill / tipPct;
  console.log(`Tip per person: ${tip / people}`);
  let total = (billValue + tip) / people;
  console.log(`Total per person: ${total}`);
  return tip, total;
};

calcTip(billValue);
