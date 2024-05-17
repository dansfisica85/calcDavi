let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    if (!isOperator(display.innerText.slice(-1))) {
        display.innerText += operator;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Erro';
    }
}
