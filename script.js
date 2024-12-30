const amount = document.getElementById('amount')

//manipulação da variavel amout para que ela so receba valores numericos
amount.addEventListener('input', () => {
    console.log(amount.value)
})