import {Pokemon} from "../models/pokemon";
import {createReducer, on} from "@ngrx/store";
import { PokemonActions } from "./action-types";

export const featureKey = 'pokemon';

export interface PokemonState {
  randomEncounter?: Pokemon,
  pokemonInformationLoading: boolean,
  catchedPokemon: Pokemon[],
}

export const initialState: PokemonState = {
  pokemonInformationLoading: false,
  catchedPokemon: []
}

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemonInformation, state => ({
    ...state,
    pokemonInformationLoading: true,
    randomEncounter: null
  })),
  on(PokemonActions.loadPokemonInformationSuccess, (state, action) => ({
    ...state,
    pokemonInformationLoading: false,
    randomEncounter: action.pokemon
  })),
  on(PokemonActions.resetPokemonInformation, state => ({
    ...state,
    randomEncounter: null
  })),
  on(PokemonActions.catchPokemon, (state, action) => ({
    ...state,
    randomEncounter: null,
    catchedPokemon: [...state.catchedPokemon, action.pokemon]
  }))
);
