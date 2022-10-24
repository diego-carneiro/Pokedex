import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { TypeFilter } from "../Interfaces";
import { Props } from "../Interfaces";

function valueText(value: number) {
  return `${value}°C`;
}

export default function PokemonFilter(props: Props) {
  const [value, setValue] = React.useState<number[]>([0, 4000]);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>({
    normal: false,
    fire: false,
    fighting: false,
    water: false,
    flying: false,
    grass: false,
    poison: false,
    electric: false,
    ground: false,
    psychic: false,
    rock: false,
    ice: false,
    bug: false,
    dragon: false,
    ghost: false,
    dark: false,
    steel: false,
    fairy: false,
  });

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    let filteredByTypeCp = props.pokemonInfo!.filter(
      (val) => val.maxCP >= value[0] && val.maxCP <= value[1]
    );

    let typeFilters = Object.keys(typeFilter).filter(
      (val) => typeFilter[val as keyof TypeFilter] === true
    );

    if (typeFilters.length !== 0) {
      let filteredByType = filteredByTypeCp.filter((val) =>
        val.types.some((val) => typeFilters.includes(val.toLowerCase()))
      );
      props.setFilteredInfo!(filteredByType);
    } else {
      props.setFilteredInfo!(filteredByTypeCp);
    }
  }, [typeFilter, value]);

  return (
    <ListBox>
      <Header>
        <h1>Filtro</h1>
      </Header>
      <Box sx={{ width: 300 }}>
        <SliderTitle>maxCp</SliderTitle>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          max={4000}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
        />
        <IndicatorLayer>
          <CPIndicator>{value[0]}</CPIndicator>
          <CPIndicator>{value[1]}</CPIndicator>
        </IndicatorLayer>
      </Box>
      <CheckBoxContainer>
        <FormControl component="fieldset">
          <FormLabel component="legend">Types</FormLabel>
          <FormGroup aria-label="position" row>
            <TypesColumn>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Normal"
                labelPlacement="end"
                checked={typeFilter.normal}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, normal: !typeFilter.normal })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Water"
                labelPlacement="end"
                checked={typeFilter.water}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, water: !typeFilter.water })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Poison"
                labelPlacement="end"
                checked={typeFilter.poison}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, poison: !typeFilter.poison })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Psychic"
                labelPlacement="end"
                checked={typeFilter.psychic}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, psychic: !typeFilter.psychic })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Bug"
                labelPlacement="end"
                checked={typeFilter.bug}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, bug: !typeFilter.bug })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Dark"
                labelPlacement="end"
                checked={typeFilter.dark}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, dark: !typeFilter.dark })
                }
              />
            </TypesColumn>
            <TypesColumn>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Fire"
                labelPlacement="end"
                checked={typeFilter.fire}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, fire: !typeFilter.fire })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Flying"
                labelPlacement="end"
                checked={typeFilter.flying}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, flying: !typeFilter.flying })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Eletric"
                labelPlacement="end"
                checked={typeFilter.electric}
                onChange={() =>
                  setTypeFilter({
                    ...typeFilter,
                    electric: !typeFilter.electric,
                  })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Rock"
                labelPlacement="end"
                checked={typeFilter.rock}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, rock: !typeFilter.rock })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Dragon"
                labelPlacement="end"
                checked={typeFilter.dragon}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, dragon: !typeFilter.dragon })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Steel"
                labelPlacement="end"
                checked={typeFilter.steel}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, steel: !typeFilter.steel })
                }
              />
            </TypesColumn>
            <TypesColumn>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Fighting"
                labelPlacement="end"
                checked={typeFilter.fighting}
                onChange={() =>
                  setTypeFilter({
                    ...typeFilter,
                    fighting: !typeFilter.fighting,
                  })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Grass"
                labelPlacement="end"
                checked={typeFilter.grass}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, grass: !typeFilter.grass })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Ground"
                labelPlacement="end"
                checked={typeFilter.ground}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, ground: !typeFilter.ground })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Ice"
                labelPlacement="end"
                checked={typeFilter.ice}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, ice: !typeFilter.ice })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Ghost"
                labelPlacement="end"
                checked={typeFilter.ghost}
                onChange={() =>
                  setTypeFilter({ ...typeFilter, ghost: !typeFilter.ghost })
                }
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Fairy"
                checked={typeFilter.fairy}
                labelPlacement="end"
                onChange={() =>
                  setTypeFilter({ ...typeFilter, fairy: !typeFilter.fairy })
                }
              />
            </TypesColumn>
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
  padding: 40px;
  border-radius: 50px 0px 0px 50px;
`;
const Header = styled(Box)`
  margin-bottom: 40px;
`;
const CheckBoxContainer = styled.div``;
const SliderTitle = styled.div`
  h1 {
  }
`;
const TypesColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const IndicatorLayer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
`
const CPIndicator = styled.div`
`