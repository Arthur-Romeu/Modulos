import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduto({nomeProduto, descricaoProduto, precoProduto, imgProduto}){

  const [nome, setNome]= useState('')
  const [imagem, setImagem]= useState('')
  const [preco, setPreco]= useState('')
  const [descricao, setDescricao]= useState('')

  function handleChange(e){
    setNome(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    alert(`O formulario de ${nome} foi enviado com sucesso!`)

    setNome('')
    setImagem('')
    setPreco('')
    setDescricao('')
  }

    return(
        <div>
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imgProduto} />
      <Card.Body>
        <Card.Title>{nomeProduto}</Card.Title>
        <Card.Text>{descricaoProduto}</Card.Text>
        <Card.Text>{precoProduto}</Card.Text>
        <Button variant="primary">Click para comprar</Button>
      </Card.Body>
    </Card>

    <form action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder='Nome do produto' onChange={(e)=> (setNome(e.target.value))} value={nome}/>
      <input type="text" placeholder='Imagem' onChange={(e)=> (setImagem(e.target.value))} value={imagem}/>
      <input type="Number" placeholder='Preco' onChange={(e)=> (setPreco (e.target.value))} value={preco}/>
      <input type="text" placeholder='Descrição' onChange={(e)=> (setDescricao(e.target.value))} value={descricao}/>
      <button onClick={handleSubmit}>Click para enviar</button>
    </form>
        </div>
    );
}

export default CardProduto

/*2) Crie um formulário para cadastrar um produto. Esse formulário deverá ter os seguintes campos:
nome
imagem
preço 
descrição
Ao clicar no botão cadastrar as informações serão mostradas na tela*/


//1) Use o componente Card e o Button do react-bootstrap para criar um CardProduto. 
//Esse componente terá as seguintes props : nomeProduto, descricaoProduto, precoProduto, imagemProduto

//Após criar o componente CardProduto importe no app e crie 2 exemplos de uso.
