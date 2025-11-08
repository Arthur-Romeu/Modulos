let opçoes = prompt('Escolha uma das opções. Entre elas: 1-Desenvolvimento Full Stack; 2-Marketing Digital; 3-Análise de dados')

if(opçoes == 1){
    console.log('Válido')
    alert('Válido')
}

else if(opçoes == 2){
    console.log('Válido')
    alert('Válido')
}

else if(opçoes == 3){
    console.log('Válido')
    alert('Válido')
}

else{
    console.log('Inválido')
    alert('Inválido')
}

switch (opçoes) {
    case '1':
        alert('Número da coordenação: +55 85 99753-0095; Coordenadora:')
        break;

    case '2':
        alert('Número da coordenação: +55 85 99753-0095; Coordenador:')
        break;

    case '3':
        alert('Número da coordenação: +55 85 99753-0095; Coordenador:')
        break;

    default:
        alert('Opção não encontrada')
        break;
}

