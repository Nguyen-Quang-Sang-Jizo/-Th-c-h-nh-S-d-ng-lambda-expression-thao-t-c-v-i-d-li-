console.log(num1);
let num2 = multiply(5, 8);
console.log(num2)

//..
function multiplys(a, b = 6) {
    return a * b;
}

let number1 = multiplys(3);
console.log(number1);
let number2 = multiplys(3, 7);
console.log(number2);