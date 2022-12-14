var calculator = document.createElement('div');


document.body.appendChild(calculator);
var result = document.getElementById('result');
var equation = '';
function addNumber(number) {
  equation += number;
  result.value = equation;
}
function clearResult() {
  equation = '';
  result.value = 0;
}
function calculate() {
  result.value = eval(equation);
}