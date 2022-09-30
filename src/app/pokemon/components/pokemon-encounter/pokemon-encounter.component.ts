import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonFacade} from "../../state/pokemon.facade";
import {loadPokemonInformation} from "../../state/pokemon.actions";
import {Pokemon} from "../../models/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-encounter',
  templateUrl: './pokemon-encounter.component.html',
  styleUrls: ['./pokemon-encounter.component.scss']
})
export class PokemonEncounterComponent implements OnInit {

  timeoutId;

  randomPokemonId: number;
  randomEncounter$ = this.pokemonFacade.randomEncounter$;

  constructor(
    private pokemonFacade: PokemonFacade,
    private router: Router
  ) {
    this.randomPokemonId = Math.floor(Math.random() * 150);
  }

  ngOnInit(): void {
    setTimeout(function () {
      this.pokemonFacade.loadPokemonInformation(this.randomPokemonId);
    }.bind(this), 1000);
  }

  resetRandomEncounter(): void {
    this.pokemonFacade.resetPokemonInformation();
  }

  catchPokemon(pokemon: Pokemon) {
    this.pokemonFacade.catchPokemon(pokemon);
    return this.router.navigate(['']);
  }

  get pokemonSpriteImageUrl(): string {
    return `https://cdn.traction.one/pokedex/pokemon/${this.randomPokemonId}.png`
  }
}
