const USD = 6.1
const EUR = 6.3
const GBP = 7.6

//obtendo os elementos do fomulario
const form = document.querySelector('form')
const amount = document.getElementById('amount')//valor no input
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')


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
        case 'GBP':
            convertCurrency(amount.value, GBP, '£')
            break
    }
}

function convertCurrency(amount, price, symbol) {
    try {
        //exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //classe que exibe o footer
        footer.classList.add('show-result')
    } catch (error) {
        footer.classList.remove('show-class')
        console.log(error)
        alert('Nao foi possivel realizar a conversao, tente novamente mais tarde')
    }
}

//funcao que retorna o valor formatado de acordo com a moeda real
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}