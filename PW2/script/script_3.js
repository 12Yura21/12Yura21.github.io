var userInput = prompt('Введіть фразу для виведення:');

function printText(text, index) {
    var output = document.getElementById('output');
    if (index < text.length) {
        output.textContent += text[index];
        index = index + 1;
        setTimeout(() => {
            printText(text, index);
        }, 200); 
    }
}

printText(userInput, 0);
