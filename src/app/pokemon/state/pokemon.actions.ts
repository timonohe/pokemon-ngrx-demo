import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../models/pokemon";

export const loadPokemonInformation = createAction(
  '[Random Encounter] Load Pokemon Information',
  props<{id: number}>()
);
export const loadPokemonInformationSuccess = createAction(
  '[Random Encounter] Load Pokemon Information Success',
  props<{pokemon: Pokemon}>()
);
export const resetPokemonInformation = createAction(
  '[Random Encounter] Reset Pokemon Information'
);
export const catchPokemon = createAction(
  '[Random Encounter] Catch Pokemon',
  props<{pokemon: Pokemon}>()
)
