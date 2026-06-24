const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const firstNumberInput = null;

const secondNumberInput = null;

const operatorInput = null;

const operate = function(operatorInput, firstNumberInput, secondNumberInput) {
    if(operatorInput === "add"){
        add(firstNumberInput, secondNumberInput)
    }
    else if(operatorInput === "subtract"){
        subtract(firstNumberInput, secondNumberInput)
    }
    else if(operatorInput === "multiply"){
        multiply(firstNumberInput, secondNumberInput)
    }
    else if(operatorInput === "divide"){
        divide(firstNumberInput, secondNumberInput)
    }

};