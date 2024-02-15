function add(a,b) {
    let sum = a+b;
    return sum;
}

function subtract(a,b) {
    let sum = a-b;
    return sum;
} 

function multiply(a,b) {
    let sum = a*b;
    return sum;
} 

function divide(a,b) {
    let sum = a/b;
    return sum;
} 

let num1 = userinput1

let num2 = userInput2

let operator = userselection

function operate(num1, operator, num2) {
    if operator === +,
        let answer = add(num1, num2);
    else if operator === -
        let answer = subtract(num1, num2);
    else if operator === /
        let answer = divide(num1, num2);
    else if operator === *
        let answer = multiply(num1, num2);
    return answer;
}