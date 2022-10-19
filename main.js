let counter = 0;
let countEl = document.getElementById("count-el");
let paraEl = document.getElementById("previous");

console.log(countEl);

function increment() {
  counter += 1;
  countEl.textContent = counter;
}

function save() {
  //get counter from increment function and display on console
  let countStr = " " + counter + " - ";
  paraEl.textContent = paraEl.textContent + countStr;
  countEl.textContent = 0;
  counter = 0;
}
