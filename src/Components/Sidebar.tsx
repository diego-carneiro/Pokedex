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
    <>
      <MobileHeader>
        <NameBox>
          <Logo src="/img/Voltbraslogo.png" />
          <TextBox>
            <h1>Voltbras App</h1>
            <h2>Pokémon Manager</h2>
          </TextBox>
        </NameBox>
      </MobileHeader>
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
          <SidebarButton>
            <SidebarButtonIcon src="/img/Caminho.png" />
            <p>Lista</p>
          </SidebarButton>
          <SidebarButton>
            <SidebarButtonIcon src="/img/emoji_events-24px@2x.png" />
            <p>Conquistas</p>
          </SidebarButton>
          <SidebarButton>
            <SidebarButtonIcon src="/img/dashboard.png" />
            <p>Pokédex</p>
          </SidebarButton>
          <SidebarButton>
            <SidebarButtonIcon src="/img/help.png" />
            <p>Ajuda</p>
          </SidebarButton>
          <SidebarButton>
            <SidebarButtonIcon src="/img/config.png" />
            <p>Configuração</p>
          </SidebarButton>
        </Drawer>
      </DrawerBox>
    </>
  );
}
//Styles
const DrawerBox = styled(Box)`
  height: 100vh;

  @media (max-width: 900px) {
    display: none;
  }
`;
const NameBox = styled(Box)`
  height: 240px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 900px) {
    margin-left: 20px;
    height: 110px;
  }
`;
const TextBox = styled(Box)`
  margin-left: 8px;

  h1 {
    font-size: 16px;
    line-height: 0px;
  }
  h2 {
    font-size: 12px;
    color: #939393;
  }
`;
const Logo = styled.img`
  width: 52px;
  height: 52px;
`;
const SidebarButton = styled.div`
  width: 150px;
  margin: 0px 0px 37px 12px;

  p {
    font-size: 16px;
    color: #939393;
    line-height: 0px;
  }

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;
const SidebarButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 25px;

  :nth-child(1) {
    filter: brightness(70%);
  }
`;
const MobileHeader = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: inherit;
  }
`;
