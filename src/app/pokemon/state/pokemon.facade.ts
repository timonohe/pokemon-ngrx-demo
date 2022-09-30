import {Injectable} from "@angular/core";
import {PokemonState} from "./pokemon.reducer";
import {Store} from "@ngrx/store";
import {PokemonActions} from './action-types';
import {PokemonSelectors} from './selector-types';
import {Pokemon} from "../models/pokemon";

@Injectable({providedIn: 'root'})
export class PokemonFacade {

  randomEncounter$ = this.store.select(PokemonSelectors.selectRandomEncounter);
  catchedPokemon$ = this.store.select(PokemonSelectors.selectCatchedPokemon);

  constructor(private store: Store<PokemonState>) {}

  loadPokemonInformation(id: number) {
    this.store.dispatch(PokemonActions.loadPokemonInformation({id}));
  }

  resetPokemonInformation() {
    this.store.dispatch(PokemonActions.resetPokemonInformation());
  }

  catchPokemon(pokemon: Pokemon) {
    this.store.dispatch(PokemonActions.catchPokemon({pokemon}))
  }
}
