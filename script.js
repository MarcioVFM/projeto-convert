const USD = 6.1
const EUR = 6.3
const GPB = 7.6

//obtendo os elementos do fomulario
const form = document.querySelector('form')
const amount = document.getElementById('amount')//valor no input
const currency = document.getElementById('currency')


//manipulação da variavel amout para que ela so receba valores numericos
amount.addEventListener('input', () => {
    hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$')
            break
        case 'EUR':
            convertCurrency(amount.value, EUR, '€')
            break
        case 'GPB':
            convertCurrency(amount.value, GPB, '£')
            break
    }
}

function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}