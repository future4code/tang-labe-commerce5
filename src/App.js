import React from "react";
import "./index.css";
import styled from "styled-components";
import Filters from "./components/Filters";
import ShoppingCart from "./components/ShoppingCart";
import CardProduto from "./components/CardProduto";

import et from "./imagem/et.jpg";
import gary from "./imagem/gary.jpg";
import groot from "./imagem/groot.jpg";
import nasa from "./imagem/nasa.jpg";
import mook from "./imagem/mook.jpg";
import rick1 from "./imagem/rick1.jpg";
import rick2 from "./imagem/rick2.jpg";
import star from "./imagem/star.jpg";



const CaixaContainer = styled.div`
  border:2px solid black;
  border-radius: 5px;
  margin: auto;
  padding: 10px;
  width: 95vw;
  height: 500vh;
  display:grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding:16px;
  gap:8px;
    
`
const QuantidadeDeProdutos = styled.div`
 display:grid;
 align-items: center;
 justify-content: space-between;
 padding: 0 16px;
`

/*
const QuantidadeDeProdutos = styled.div` 
  display: grid;
  grid-template-columns: (4,1fr);
  
  
`
*/

const Valores = styled.input`
  border-radius: 5px;
  margin-bottom: 5px;
`

const FiltroProdutos = styled.div`
  border: 2px solid black;
  padding: 5px;
  width: 15vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  background: #cdcdc1;
`

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

export default function App() {
  return (
    <CaixaContainer className="App">
      <FiltroProdutos className="Filtros">
        <p>Filtros:</p>
        <Valores placeholder="Valor minimo"></Valores>
        <Valores placeholder="Valor máximo"></Valores>
        <Valores placeholder="Nome do produto"></Valores>
      </FiltroProdutos>

      <QuantidadeDeProdutos className="produtos">
        <p>Quantidade de produtos: 8</p>
          <select name="cars" id="cars">
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
        
      </QuantidadeDeProdutos>
        
    </CaixaContainer>
  );
}
