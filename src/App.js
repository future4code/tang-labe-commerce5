import React from "react";
import "./index.css";
import styled from "styled-components";
import {Filters} from "./Components/Filters";
import {ShoppingCart} from "./Components/ShoppingCart";
import {CardProduto} from "./Components/CardProduto";
import {Products} from "./Components/Products";

import et from './Imagens/et.jpg'
import gary from "./Imagens/gary.jpg";
import groot from "./Imagens/groot.jpg";
import nasa from "./Imagens/nasa.jpg";
import mook from "./Imagens/mook.jpg";
import rick1 from "./Imagens/rick1.jpg";
import rick2 from "./Imagens/rick2.jpg";
import star from "./Imagens/star.jpg";



const CaixaContainer = styled.div`
  border:2px solid black;
  border-radius: 5px;
  margin: auto;
  padding: 10px;
  width: 95vw;
  height: 90vh;
  display:grid;
  grid-template-columns: 0.8fr 3fr 1.2fr;
  padding:16px;
  gap:8px;
    
`
/*
const QuantidadeDeProdutos = styled.div` 
  display: grid;
  grid-template-columns: (4,1fr);
  
  
`
*/

//lista de produtos 
const produtos = [
  {
    id: 1,
    nome: 'Rick & Morty',
    preco: 60,
    foto: rick1
  },
  {
    id: 2,
    nome: 'Rick',
    preco: 60,
    foto: rick2
  },
  {
    id: 3,
    nome: 'ET',
    preco: 50,
    foto: et
  },
  {
    id: 4,
    nome: 'Final Space - Gary',
    preco: 40,
    foto: gary
  },
  {
    id: 5,
    nome: 'Groot',
    preco: 60,
    foto: groot
  },
  {
    id: 6,
    nome: 'Nasa',
    preco: 45,
    foto: nasa
  },
  {
    id: 7,
    nome: 'Mooncake e Gary',
    preco: 45,
    foto: mook
  },
  {
    id: 8,
    nome: 'Star Wars',
    preco: 50,
    foto: star
  },
]


class App extends React.Component {

  state ={
    productsInCart: []
  }
  //função que adiciona a quantidade no carrinho
  //foi usada no botao ADICIONAR na lista de produtos e também no botão "+" no carrinho
  addProdutosCarrinho = (idProduto) => {
    //variavel que retorna true ou false. A função "find" procura no carrinho o id do produto que está adicionado
    //e compara com o seu parametro
    const productInCart = this.state.productsInCart.find(produto => idProduto === produto.id)
    
    //parametro da função sendo igual ao id do produto, entao ele será true.
    //se a variavel for true:
    if (productInCart) {
      //em uma nova variavel para auxiliar na lista do carrinho, ele vai criar uma nova lista (função map)
      const newProductInCart = this.state.productsInCart.map((produto) => {
        //ele vai verificar se o seu parametro já existe na lista
        if (idProduto === produto.id) {
          return {
            //se existir, ele vai copiar a lista que ja existia e retornar ela mesma
            ...produto,
            //e adicionar uma unidade
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      } )
      //atualiza a renderização pro usuario da nova lista criada
      this.setState({productsInCart: newProductInCart})
    } 
      //se a funçao "find" nao encontrar nenhum id igual ao parametro da função
      else {
      //procura na lista de produtos o id igual ao parametro da função
      const adicionarProduto = produtos.find(produto => idProduto === produto.id)

      //faz aparecer no carrinho o item adicionado com a quantidade 1
      const newProductInCart = [...this.state.productsInCart, {...adicionarProduto, quantidade: 1}]
        
      //renderiza para o usuario a nova lista
      this.setState({productsInCart: newProductInCart})
    }
  }

  //diminui 1 unidade  do item no carrinho
  removeProdutosCarrinho = (idProduto) => {
    const productInCart = this.state.productsInCart.find(produto => idProduto === produto.id)
    
    if (productInCart) {
      const newProductInCart = this.state.productsInCart.map((produto) => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1
          }
        }
        return produto
      }).filter( (produto) => produto.quantidade > 0 )
  
      this.setState({productsInCart: newProductInCart})
    } 
  }

  //exclui o item direito.
  excluiProdutosCarrinho = (idProduto) => {
    const productInCart = this.state.productsInCart.find(produto => idProduto === produto.id)
    
    if (productInCart) {
      const newProductInCart = this.state.productsInCart.map((produto) => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade - produto.quantidade
          }
        }
        return produto
      } ).filter( (produto) => produto.quantidade > 0 )
  
      this.setState({productsInCart: newProductInCart})
    } 
  }

  render() {
    return (
      <CaixaContainer className="App">
          {/* renderiza o componente Filters, do arquivo Filter.js */}
          <Filters/>

          {/* renderiza o componente Products, do arquivo Products.js */}
          <Products 
            produtos={produtos}
            addProdutosCarrinho={this.addProdutosCarrinho}
          />
          {/* renderiza o componente ShoppingCart, do arquivo ShoppinCart.js */}
          <ShoppingCart 
            productsInCart={this.state.productsInCart}
            addProdutosCarrinho={this.addProdutosCarrinho}
            removeProdutosCarrinho={this.removeProdutosCarrinho}
            excluiProdutosCarrinho={this.excluiProdutosCarrinho}
          />
      </CaixaContainer>
    );
  }
  
}

export default App;