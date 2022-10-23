import React, { useState } from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";
import { Props } from "../Interfaces";

const PokemonCP: React.FC<Props> = (props: Props) => {
  if (props.pokemonCP === null || props.pokemonCP === undefined) {
    return <></>;
  }

  let color = "#abc";

  if (props.pokemonCP <= 500) {
    color = "#F87060";
  }
  if (props.pokemonCP >= 501 && props.pokemonCP <= 1000) {
    color = "#662C91";
  }
  if (props.pokemonCP >= 1001 && props.pokemonCP <= 1500) {
    color = "#F5B700";
  }
  if (props.pokemonCP > 1500) {
    color = "#00C1FD";
  }

  return <CPBox cpColor={color}><p>{props.pokemonCP}</p></CPBox>;
};

export default PokemonCP;

interface CPBoxProps {
  cpColor: string;
}
//Styles
const CPBox = styled(Box)<CPBoxProps>`
  width: 54px;
  height: 19px;
  border-radius: 4px;
  background-color: ${(props) => props.cpColor};

  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: #FFF;
  }
`;
