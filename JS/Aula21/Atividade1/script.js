// atividade 1 
//crie um array com descontos de 15% para cada valor no array listaPrecos. Chame esse novo array de precosDescontados
//utilize uma função de callback do tipo arrow function
let listaPrecos = [100, 200, 300, 400, 500]

let precosDescontados = listaPrecos.map((x) => x = x - x * 0.15)

console.log(listaPrecos)
console.log(precosDescontados)