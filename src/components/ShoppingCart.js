import React from "react";
import styled from 'styled-components';

const Carrinho = styled.div`
  border: 2px solid black;
  padding: 15px;
  width: 15vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  background: #cdcdc1;
`
const ProdutoContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
`


export default class ShoppingCart extends React.Component {

    render() {
        return (

            <Carrinho className="carrinho">
                <h3>Carrinho:</h3>

                

            </Carrinho>
        )
    }
}