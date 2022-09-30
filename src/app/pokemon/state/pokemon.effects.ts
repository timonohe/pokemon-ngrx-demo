import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PokemonService} from "../services/pokemon.service";
import {PokemonActions} from './action-types';
import {catchError, EMPTY, map, switchMap} from "rxjs";
import {loadPokemonInformationSuccess} from "./pokemon.actions";

@Injectable({providedIn: 'root'})
export class PokemonEffects {

  loadPokemonInformation$ = createEffect(() => this.actions.pipe(
    ofType(PokemonActions.loadPokemonInformation),
    switchMap(action => this.pokemonService.loadPokemonInformation(action.id)
      .pipe(
        map(pokemon => loadPokemonInformationSuccess({pokemon})),
        catchError(() => EMPTY))
      )
    )
  );

  constructor(
    private actions: Actions,
    private pokemonService: PokemonService
  ) { }

}
