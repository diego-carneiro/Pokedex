import * as React from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Sidebar() {
  return (
    <DrawerBox>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 283,
            boxSizing: "border-box",
            borderWidth: 0,
            position: "static",
            paddingLeft: 7,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <NameBox>
          <Logo src="/img/Voltbraslogo.png" />
          <TextBox>
            <h1>Voltbras App</h1>
            <h2>Pokémon Manager</h2>
          </TextBox>
        </NameBox>

        <List>
          {["Lista", "Conquistas", "Pokédex", "Ajuda", "Configuração"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </DrawerBox>
  );
}

//Styles
const DrawerBox = styled(Box)`
  height: 100vh;
`;
const NameBox = styled(Box)`
  height: 240px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const TextBox = styled(Box)`
  margin-left: 8px;

  h1 {
    font-size: 20px;
    line-height: 0px;
  }
  h2 {
    font-size: 15px;
    color: #939393;
  }
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
