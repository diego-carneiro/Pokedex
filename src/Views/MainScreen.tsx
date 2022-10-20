import React from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";

import Sidebar from "../Components/Sidebar";
import PokemonList from "../Components/PokemonList";
import PokemonFilter from "../Components/PokemonFilter";

export default function MainScreen() {
  return (
    <MainBox>
      <Sidebar />
      <PokemonList />
      <PokemonFilter />
    </MainBox>
  );
}

//Styles
const MainBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
`;
