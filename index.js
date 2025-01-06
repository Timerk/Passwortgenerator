const lengthInput = document.getElementById('lengthInput');
const generateButton = document.getElementById('generateButton');


generateButton.addEventListener('click', () =>{
    const length = lengthInput.value;
    document.getElementById("output").textContent = generatePassord(length);
})

function validateInput() {
    const value = lengthInput.value;
    if (parseInt(value, 10) < 1 || parseInt(value, 10) > 100) {
        lengthInput.setCustomValidity('Bitte geben Sie eine positive Zahl zwischen 1 und 100 ein.');
        lengthInput.reportValidity(); 
        return false;
    } else {
        lengthInput.setCustomValidity('');
        return true;
    }
}

function generatePassord(length) {
    if (validateInput()) {
        const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*;,?.+-=';
        let result = "";
    
        for (let i = 0; i < length; i++) {
            const symbolIndex = Math.floor(Math.random() * symbols.length);
            result += symbols[symbolIndex];
        }
    
        return result;
    }
}