import {featureKey, PokemonState} from "./pokemon.reducer";
import {createFeatureSelector, createSelector, select} from "@ngrx/store";

export const selectFeature = createFeatureSelector<PokemonState>(featureKey);
export const selectRandomEncounter = createSelector(
  selectFeature,
  pokemonState => pokemonState.randomEncounter
);
export const selectCatchedPokemon = createSelector(
  selectFeature,
  pokemonState => {
    return [...pokemonState.catchedPokemon].sort((a, b) => {
      return a.id < b.id ? -1 : 1;
    });
  }
);
