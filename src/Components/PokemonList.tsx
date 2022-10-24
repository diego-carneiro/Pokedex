import React from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";

import PokemonIcon from "./PokemonIcon";
import PokemonCP from "./PokemonCP";

import { Props } from "../Interfaces";

type Count = {
  children: React.ReactNode;
};

const SubTitle: React.FC<Count> = ({ children }: Count) => {
  return <h2>{children}</h2>;
};

export default function PokemonList(props: Props) {
  return (
    <>
      <ListBox>
        <Header>
          <h1>Lista de Pokémons</h1>
          <SubTitle>Total visíveis: {props.pokemonInfo!.length}</SubTitle>
        </Header>
        <PokemonGrid>
          {props.pokemonInfo!.map((data, index) => (
            <PokemonIcon>
              <PokemonImg src={data.image} />
              <PokemonInfo>
                <h1>{data.name}</h1>
                <PokemonType>
                  {data.types.map((data, index) => (
                    <h2>{data}</h2>
                  ))}
                </PokemonType>
                <PokemonCP pokemonCP={data.maxCP}></PokemonCP>
              </PokemonInfo>
              <PokemonNumber>
                <p>{data.number}</p>
              </PokemonNumber>
            </PokemonIcon>
          ))}
        </PokemonGrid>
      </ListBox>
    </>
  );
}

//Styles
const ListBox = styled.div`
  width: 596px;
  height: calc(100vh - 50px);
  background-color: #f4f4f4;
  box-sizing: border-box;
  padding: 40px 20px 40px 40px;
  border-radius: 50px 50px 0px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 35px;
    line-height: 0px;
  }
  h2 {
    font-size: 14px;
    color: #00a7fd;
  }
`;
const Header = styled(Box)`
  margin-bottom: 40px;
`;
const PokemonGrid = styled.div`
  box-sizing: border-box;
  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #fff;
    border-radius: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdb;
    border-radius: 9px;
    height: "2px";
  }
`;
const PokemonImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 14px;
  border: 1px solid #dbdbdb;
  margin: 0px 20px 0px 10px;
`;
const PokemonInfo = styled.div`
  width: 106px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 16px;
  }
`;
const PokemonType = styled.div`
  display: flex;
  flex-direction: row;

  h2 {
    font-size: 14px;
    color: #939393;
    line-height: 0px;
  }
`;
const PokemonNumber = styled.div`
  height: 64px;

  p {
    font-size: 12px;
    color: #939393;
    line-height: 0px;
  }
`;
