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
        return add(firstNumberInput, secondNumberInput)
    }
    else if(operatorInput === "subtract"){
        return subtract(firstNumberInput, secondNumberInput)
    }
    else if(operatorInput === "multiply"){
        return multiply(firstNumberInput, secondNumberInput)
    }
    else if(operatorInput === "divide"){
        return divide(firstNumberInput, secondNumberInput)
    }

};

