let numeros = [15, 3, 27, 8, 42, 10, 5]
let maior = numeros[0]
let menor = numeros[0]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
        console.log(`O maior número é: ${maior}`)
    }

    else if (numeros[i] < menor) {
        menor = numeros[i]
        console.log(`O menor número é: ${menor}`)
    }
}