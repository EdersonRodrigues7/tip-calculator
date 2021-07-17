const teste = document.getElementById('billValue');
console.log(teste);
//teste.addEventListener()

const billValue = 630;
const tipPct = 15;
const people = 8;

const calcTip = bill => {
  let tip = bill / tipPct;
  console.log(`Tip per person: ${tip / people}`);
  let total = (billValue + tip) / people;
  console.log(`Total per person: ${total}`);
  return tip, total;
};

calcTip(billValue);
