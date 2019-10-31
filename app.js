// DOM Elements

const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

//generate Event listner

generateEL.addEventListener('click', () => {
    const length = +lengthEL.value;
    const hasUpper = uppercaseEL.checked;
    const haslower = lowercaseEL.checked;
    const hasNumber = numbersEL.checked;
    const hasSymbol = symbolsEL.checked;


    resultEL.innerText = generatePassword(haslower, hasUpper, hasNumber, hasSymbol, length)
});


//generate password Function

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = '';
    const typesCount = upper + lower + number + symbol ;
    typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );
    if(typesCount === 0){
        return ''
    }    
    for(i=0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]()
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword
}

//Genetor Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor((Math.random() * 26) + 97));

}

function getRandomUpper() {
    return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor((Math.random() * 10) + 48));
}

function getRandomSymbol() {
    const symbols = "!@{}[]/,&^%$#=><"
    return symbols[Math.floor(Math.random() * symbols.length)]
}