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
  width: 240px;
  height: 80px;
  border-radius: 20px;
  background-color: #FFF;
  margin: 15px 15px 0px 0px;

  display: flex;
  align-items: center;
`;
