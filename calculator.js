var val1 = document.getElementById("val1");
var val2 = document.getElementById("val2");
var outputDOM = document.getElementById("answer");
var multiply = document.getElementById("multiply");
var subtract = document.getElementById("subtract");
var add = document.getElementById("add");
var divide = document.getElementById("divide");
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiplication (a,b) {
  let product = a * b;
  return product
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function subtraction (a,b) {
  let difference = a-b;
  return difference
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function addition (a,b) {
  let sum = a + b;
  return sum
};


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function division (a,b) {
  let quotient = a / b;
  return quotient
};


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

  
  
add.addEventListener("click", function() {
  math(parseInt(val1.value), parseInt(val2.value), addition)

})

subtract.addEventListener("click", function() {
  math(parseInt(val1.value), parseInt(val2.value), subtraction)
})

divide.addEventListener("click", function() {
  math(parseInt(val1.value), parseInt(val2.value), division)
})

  multiply.addEventListener("click", function() {
    math(parseInt(val1.value), parseInt(val2.value), multiplication)
})



function math(a, b, operation) {
  let answer = operation(a, b);
  outputDOM.innerHTML = answer;
}