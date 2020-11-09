import React from "react";
import {CardProduto } from './CardProduto'
import styled from "styled-components";

const ProductsContainer = styled.div`
border: 2px solid black;
  display: flex;
  flex-direction: column;
  background: #cdcdc1;`

const ProductsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

`

export class Products extends React.Component {
    render() {
        return (
        <ProductsContainer>
            <ProductsHeader>
                {/* Deixar a quantidade de produtos dinâmica */}
                <p>Quantidade de Produtos: 5</p>
                <label>
                    Ordenação:
                    <select>
                        <option value="" key="">Crescente</option>
                        <option value="" key="">Decrescente</option>
                    </select>
                </label>
            </ProductsHeader>     

            <ProductsGrid>
                {/* this.props.produtos.map(): Mapeia, ou seja, cria um novo array/lista com os produtos da nossa lista ja criada */}
                {this.props.produtos.map( (produto) => {
                            
                            // Retorna a renderização do CardProduto
                            return (
                                <CardProduto 
                                    // Recebe o produto e a função para poder repassar para o CardProduto
                                    produto={produto} 
                                    addProdutosCarrinho={this.props.addProdutosCarrinho} />
                           )
                        }
                    )
                }
                </ProductsGrid>
        </ProductsContainer>
        )
    }
}