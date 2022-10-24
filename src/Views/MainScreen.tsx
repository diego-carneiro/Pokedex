import React, { useState, useEffect } from "react";

import { client } from "../config/client-graphql";
import { gql } from "@apollo/client";

import styled from "styled-components";
import Box from "@mui/material/Box";

import Sidebar from "../Components/Sidebar";
import PokemonList from "../Components/PokemonList";
import PokemonFilter from "../Components/PokemonFilter";

import { Pokémons } from "../Interfaces";

export default function MainScreen() {
  const [info, setInfo] = useState<Pokémons[]>([]);
  const [filteredInfo, setFilteredInfo] = useState<Pokémons[]>(info);

  useEffect(() => {
    getData();
    setFilteredInfo(info);
  }, [info]);

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
        console.log(res.data.pokemons);
        setInfo(res.data.pokemons);
      });
  }

  return (
    <MainBox>
      <Sidebar />
      <PokemonList pokemonInfo={filteredInfo} />
      <PokemonFilter pokemonInfo={info} setFilteredInfo={setFilteredInfo} />
    </MainBox>
  );
}

//Styles
const MainBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100vw;

    display: flex;
    flex-direction: row;
  }
`;
