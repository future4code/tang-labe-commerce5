import React from "react";
import styled from 'styled-components';
import { ShoppingCartItem } from "./ShoppingCartItem";

const Carrinho = styled.div`
  border: 2px solid black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background: #cdcdc1;
`
const ProdutoContainer = styled.div`
    display: grid;
    justify-content: space-around;
    flex-wrap: wrap;
`

export class ShoppingCart extends React.Component {
    valorTotal = () => {
        let totalValor= 0

        //percorre os itens do carrinho
        for (let produto of this.props.productsInCart) {
            //primeiro ciclo:
            //valor total = 0 + preco do produto * a quantidade do produto
            //segundo ciclo:
            //valor total = valor total od primeiro ciclo + preco do produto * a quantidade do produto
            totalValor += produto.preco * produto.quantidade
        }
        return totalValor
    }

    render() {
        return (
            <Carrinho className="carrinho">
                <h3>Carrinho:</h3>
                <ProdutoContainer>
                    {/* Mapeia os produtos do carrinho e retorna as propriedades do ShoppingCartItem que é passado como props para o filho */}
                    {this.props.productsInCart.map((produto) => {
                        return <ShoppingCartItem 
                                    cartItem={produto}
                                    addProdutosCarrinho={this.props.addProdutosCarrinho}
                                    removeProdutosCarrinho={this.props.removeProdutosCarrinho}
                                    excluiProdutosCarrinho={this.props.excluiProdutosCarrinho}            
                                />
                    })} 
                </ProdutoContainer>
                <p>Valor total: R${this.valorTotal()},00</p>
            </Carrinho>
        )
    }
}