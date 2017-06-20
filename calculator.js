var val1 = document.getElementById("val1");
var val2 = document.getElementById("val2");
var answer = document.getElementById("answer");



/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

function multiply (a,b) {
  var multiply = document.getElementById("multiply");
  let product = a * b;
  return product
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function substraction (a,b) {
  var subtract = document.getElementById("subtract");
  let diiference = a-b;
  return difference
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function addittion (a,b) {
  var add = document.getElementById("add");
  let sum = a + b;
  return sum
};


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function division (a,b) {
  var subtract = document.getElementById("subtract");
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
function math(val1,val2,operation) {
  
  
  add.addEventListener("click", function() {
    addittion(val1, val2)
    answer.innerHTML = sum
    })

  subtract.addEventListener("click", function() {
    subtraction(val1, val2)
    answer.innerHTML = difference
    })

  divide.addEventListener("click", function() {
    division(val1, val2)
    answer.innerHTML = quotient
    })

  multiply.addEventListener("click", function() {
    multiply(val1, Val2)
    answer.innerHTML = product
  })

}

math(val1, val2, multiply)