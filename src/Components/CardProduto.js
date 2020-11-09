import React from "react";
import styled from 'styled-components';

const Camisetas = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`
const ButtonAdicionar = styled.button`
  border: 2px solid gray;
  border-radius: 5px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 5px 30px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  top: 2px;
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  p {
    margin:  4px 0;

  }
`

export class CardProduto extends React.Component {

    render() {
      //variavel criada para auxilio para facilitar o código. Se nao tivesse sido passada em Products.js, nao seria reconhecido
      const produto = this.props.produto
        return (
            <Camisetas >
              <img src={produto.foto} alt="" />
              <CardInfo>
                <p>{produto.nome} - R$ {produto.preco},00 </p>
                <ButtonAdicionar onClick={ () => this.props.addProdutosCarrinho(produto.id) }>Adicionar</ButtonAdicionar>
              </CardInfo>
            </Camisetas>
        )
    }
}