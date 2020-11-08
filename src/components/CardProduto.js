import React from "react";
import styled from 'styled-components';

const Camisetas1 = styled.div`
  border: 1px dashed black;
  padding: 10px;
  width: 100%;
  height: 50vh;
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
export default class ShoppingCart extends React.Component {

    render() {
        return (

            // essa parte nao sei se ta certa kkk

            <Camisetas1 >
                
                
                <ButtonAdicionar onClick>= Adicionar</ButtonAdicionar>
            </Camisetas1>
        )
    }
}