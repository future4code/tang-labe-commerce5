import React from "react";
import styled from 'styled-components'

const ItemContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    padding: 8px;
    p{
        margin: 0;
    }
`

export class ShoppingCartItem extends React.Component {
    render() {
        //renderiza as propriedades passadas de seu pai
        return <ItemContainer>
            <p>{this.props.cartItem.quantidade}x</p>
            <p>{this.props.cartItem.nome}</p>
            <button onClick={ () => this.props.addProdutosCarrinho(this.props.cartItem.id)}>+</button>
            <button onClick={ () => this.props.removeProdutosCarrinho(this.props.cartItem.id)}>-</button>
            <button onClick={ () => this.props.excluiProdutosCarrinho(this.props.cartItem.id)}>Remover</button>
        </ItemContainer>
    }
}