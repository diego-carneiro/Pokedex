import React, { useState, useEffect } from "react";

import { client } from "../config/client-graphql";
import { gql } from "@apollo/client";

import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import PokemonIcon from "./PokemonIcon";
import PokemonCP from "./PokemonCP";

export interface Pokémons {
  id: string;
  number: string;
  name: string;
  types: string[];
  image: string;
  maxCP: number;
}

type Count = {
  children: React.ReactNode;
};

const SubTitle: React.FC<Count> = ({ children }: Count) => {
  return <h2>{children}</h2>;
};

export default function PokemonList() {
  const [info, setInfo] = useState<Pokémons[]>([]);

  useEffect(() => {
    getData();
  });

  function getData() {
    client
      .query({
        query: gql`
          query {
            pokemons(first: -1) {
              id
              name
              number
              types
              image
              maxCP
            }
          }
        `,
      })
      .then((res: any = []) => {
        setInfo(res.data.pokemons);
        console.log(info);
      });
  }

  return (
    <>
      <ListBox>
        <Header>
          <h1>Lista de Pokémons</h1>
          <SubTitle>Total visíveis: {info.length}</SubTitle>
        </Header>
        <PokemonGrid>
          {info.map((data, index) => (
            <PokemonIcon>
              <PokemonImg src={data.image} />
              <PokemonInfo>
                <h1>{data.name}</h1>
                <PokemonType>
                  {data.types.map((data, index) => (
                    <h2>{data}</h2>
                  ))}
                </PokemonType>
                <PokemonCP>{data.maxCP}</PokemonCP>
              </PokemonInfo>
            </PokemonIcon>
          ))}
        </PokemonGrid>
      </ListBox>
    </>
  );
}

//Styles
const ListBox = styled(Box)`
  width: 896px;
  height: 100vh;
  background-color: #f4f4f4;
  box-sizing: border-box;
  padding: 65px;
  border-radius: 50px;
  margin-right: 100px;

  h1 {
    font-size: 50px;
    line-height: 0px;
  }

  h2 {
    font-size: 19px;
    color: #00a7fd;
  }
`;
const Header = styled(Box)`
  width: 896px;
  margin-bottom: 40px;
`;
const PokemonGrid = styled(Grid)`
  width: 896px;
  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;
`;
const PokemonImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 14px;
  border: 1px solid #dbdbdb;
  margin: 0px 20px 0px 10px;
`;
const PokemonInfo = styled.div`
  height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 24px;
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
