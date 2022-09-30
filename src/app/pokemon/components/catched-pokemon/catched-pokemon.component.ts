import { Component, OnInit } from '@angular/core';
import {PokemonFacade} from "../../state/pokemon.facade";
import {Observable} from "rxjs";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-catched-pokemon',
  templateUrl: './catched-pokemon.component.html',
  styleUrls: ['./catched-pokemon.component.scss']
})
export class CatchedPokemonComponent implements OnInit {

  catchedPokemon$: Observable<Pokemon[]>;

  constructor(private pokemonFacade: PokemonFacade) { }

  ngOnInit(): void {
    this.catchedPokemon$ = this.pokemonFacade.catchedPokemon$;
  }

}
