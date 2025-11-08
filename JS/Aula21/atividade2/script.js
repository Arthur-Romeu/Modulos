//crie um array apenas com os objetos que tenham idade maior que 18 e menor ou igual a 25
// let listaPessoas = [
//     {nome: 'João', idade: 20},
//     {nome: 'Maria', idade: 25},
//     {nome: 'Jose', idade: 40},
//     {nome: 'Pedro', idade: 30},
//     {nome: 'Ana', idade: 15},
//     {nome: 'Lucas', idade: 10}
// ]

// let novaListaPessoas = listaPessoas.filter((num) => num.idade > 18 && num.idade <= 25)
// console.log(listaPessoas)
// console.log(novaListaPessoas)

const funcionarios = [
  { nome: "Ana Silva", idade: 25, filhos: 0, departamento: "TI", sexo: "F", salario: 3500 },
  { nome: "Carlos Souza", idade: 32, filhos: 1, departamento: "RH", sexo: "M", salario: 4200 },
  { nome: "Mariana Costa", idade: 28, filhos: 0, departamento: "Financeiro", sexo: "F", salario: 3800 },
  { nome: "João Almeida", idade: 45, filhos: 2, departamento: "TI", sexo: "M", salario: 6000 },
  { nome: "Fernanda Lima", idade: 22, filhos: 0, departamento: "RH", sexo: "F", salario: 3100 },
  { nome: "Roberto Martins", idade: 39, filhos: 3, departamento: "Financeiro", sexo: "M", salario: 5200 },
  { nome: "Juliana Ribeiro", idade: 31, filhos: 0, departamento: "TI", sexo: "F", salario: 4000 },
  { nome: "Paulo Henrique", idade: 27, filhos: 0, departamento: "RH", sexo: "M", salario: 3700 },
  { nome: "Camila Torres", idade: 34, filhos: 2, departamento: "Financeiro", sexo: "F", salario: 4800 },
  { nome: "André Oliveira", idade: 29, filhos: 0, departamento: "TI", sexo: "M", salario: 3900 },
  { nome: "Tatiane Mendes", idade: 41, filhos: 4, departamento: "RH", sexo: "F", salario: 5500 },
  { nome: "Felipe Barbosa", idade: 36, filhos: 0, departamento: "Financeiro", sexo: "M", salario: 4600 },
  { nome: "Bianca Ferreira", idade: 23, filhos: 0, departamento: "TI", sexo: "F", salario: 3200 },
  { nome: "Ricardo Gomes", idade: 52, filhos: 3, departamento: "RH", sexo: "M", salario: 7000 },
  { nome: "Aline Rocha", idade: 26, filhos: 0, departamento: "Financeiro", sexo: "F", salario: 3600 },
  { nome: "Marcelo Dias", idade: 48, filhos: 2, departamento: "TI", sexo: "M", salario: 6400 },
  { nome: "Patrícia Nunes", idade: 30, filhos: 0, departamento: "RH", sexo: "F", salario: 3900 },
  { nome: "Gustavo Pinto", idade: 38, filhos: 1, departamento: "Financeiro", sexo: "M", salario: 5100 },
  { nome: "Letícia Araújo", idade: 21, filhos: 0, departamento: "TI", sexo: "F", salario: 3000 },
  { nome: "Eduardo Lima", idade: 55, filhos: 2, departamento: "RH", sexo: "M", salario: 7200 }
];
//a) crie um array para cada departamento. Filtrando apenas os funcionarios de
//funcionariosTI
//funcionariosRH
//funcionariosFinanceiro

//b) Usando o array funcionarios, filtre apenas os funcionários que: Trabalham no departamento TI , 
//Não têm filhos e  possuem salário maior que 3500
//funcionariosTIsemfilhosSalariosAltos

const funcionariosTI = funcionarios.filter((num) => num.departamento == 'TI')
console.log(funcionariosTI)

const funcionariosRH = funcionarios.filter((num) => num.departamento == 'RH')
console.log(funcionariosRH)

const funcionariosFinanceiro = funcionarios.filter((num) => num.departamento == 'Financeiro')
console.log(funcionariosFinanceiro)

const funcionariosTIsemfilhosSalariosAltos = funcionarios.filter((num) => num.departamento == 'TI' && num.filhos === 0 && num.salario > 3500)
console.log(funcionariosTIsemfilhosSalariosAltos)

//para o array de funcionarios,
// reduza todas as propriedades salario para o valor
// total dos salarios dos funcionarios

let soma = funcionarios.reduce(
  (total, funcionario) => total += funcionario.salario, 0
)
console.log(soma)

