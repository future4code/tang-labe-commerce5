import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
border: 2px solid black;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background: #cdcdc1;
`
const Valores = styled.input`
  border-radius: 5px;
  margin-bottom: 5px;
`


export class Filters extends React.Component {
    render() {
        return (
            <FilterContainer>
                <p>Filtros:</p>
                <Valores placeholder="Valor minimo"></Valores>
                <Valores placeholder="Valor máximo"></Valores>
                <Valores placeholder="Nome do produto"></Valores>
            </FilterContainer>
        )
    }
}