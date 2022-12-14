let counter = 0;
function substract() {
  counter--;
  if (counter<1)
    {
      counter = 1;
    }
  document.getElementById("counter").innerHTML = counter;
  calculate();
}
function add() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
  calculate();
}
function calculate() {
  let value = document.getElementById("input").value;
  document.getElementById("answer").innerHTML = counter * value;
  document.getElementById("answer2").innerHTML = counter * value * 1.21;
}

calculate();