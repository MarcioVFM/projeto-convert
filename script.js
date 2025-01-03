const USD = 6.1
const EUR = 6.3
const GPB = 7.6

//obtendo os elementos do fomulario
const form = document.querySelector('form')
const amount = document.getElementById('amount')//valor no input
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')


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
    try {
        //classe que exibe o footer
        footer.classList.add('show-result')
    } catch (error) {
        footer.classList.remove('show-class')
        console.log(error)
        alert('Nao foi possivel realizar a conversao, tente novamente mais tarde')
    }
}