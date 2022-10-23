export interface Props {
  children?: React.ReactNode;
  pokemonCP?: number;
  pokemonInfo?: Pokémons[];
  setFilteredInfo?: React.Dispatch<React.SetStateAction<Pokémons[]>>;
}

export interface TypeFilter {
  normal: boolean;
  fire: boolean;
  fighting: boolean;
  water: boolean;
  flying: boolean;
  grass: boolean;
  poison: boolean;
  electric: boolean;
  ground: boolean;
  psychic: boolean;
  rock: boolean;
  ice: boolean;
  bug: boolean;
  dragon: boolean;
  ghost: boolean;
  dark: boolean;
  steel: boolean;
  fairy: boolean;
}
export interface Pokémons {
  id: string;
  number: string;
  name: string;
  types: string[];
  image: string;
  maxCP: number;
}
