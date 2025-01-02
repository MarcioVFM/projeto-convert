const amount = document.getElementById('amount')

//manipulação da variavel amout para que ela so receba valores numericos
amount.addEventListener('input', () => {
    hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
})