import React from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";
import { Props } from "../Interfaces";

const PokemonCP: React.FC<Props> = ({ children }: Props) => {

  return <CPBox>{children}</CPBox>;
};

export default PokemonCP;

//Styles
const CPBox = styled(Box)`
  width: 74px;
  height: 30px;
  border-radius: 4px;
  background-color: aqua;

  display: flex;
  justify-content: center;
  align-items: center;
`;
