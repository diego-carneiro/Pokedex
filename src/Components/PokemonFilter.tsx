import React from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function valueText(value: number) {
  return `${value}°C`;
}

export default function PokemonFilter() {
  const [value, setValue] = React.useState<number[]>([20, 400]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <ListBox>
      <Header>
        <h1>Filtro</h1>
      </Header>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          max={3000}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
        />
      </Box>
      <CheckBoxContainer>
        <FormControl component="fieldset">
          <FormLabel component="legend">Types</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Normal"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Fire"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Fighting"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Water"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Flying"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Grass"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Poison"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Eletric"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Ground"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Psychic"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Rock"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Ice"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Bug"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Dragon"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Ghost"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Dark"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Stell"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Fairy"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </CheckBoxContainer>
    </ListBox>
  );
}

//Styles
const ListBox = styled(Box)`
  width: 429px;
  height: 556px;
  background-color: #f4f4f4;
  box-sizing: border-box;
  padding: 65px;
  border-radius: 50px 0px 0px 50px;
`;
const Header = styled(Box)`
  width: 896px;
  margin-bottom: 40px;
`;
const CheckBoxContainer = styled.div``;
