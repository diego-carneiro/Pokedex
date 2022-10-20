import React from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";
import { Props } from "../Interfaces";

const PokemonIcon: React.FC<Props> = ({ children }: Props) => {
  return <PokeBox>{children}</PokeBox>;
};

export default PokemonIcon;

//Styles
const PokeBox = styled(Box)`
  width: 350px;
  height: 110px;
  border-radius: 20px;
  margin: 0px 15px 15px 0px;
  background-color: #FFF;

  display: flex;
  align-items: center;
`;
