import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatchedPokemonComponent} from './components/catched-pokemon/catched-pokemon.component';
import {PokemonEncounterComponent} from './components/pokemon-encounter/pokemon-encounter.component';
import {PokemonRoutingModule} from "./pokemon-routing.module";
import {StoreModule} from "@ngrx/store";
import {featureKey, pokemonReducer} from "./state/pokemon.reducer";
import {EffectsModule} from "@ngrx/effects";
import {PokemonEffects} from "./state/pokemon.effects";
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {HttpClientModule} from "@angular/common/http";
import {CachtedPokemonInfoComponent} from './components/cachted-pokemon-info/cachted-pokemon-info.component';

@NgModule({
  declarations: [
    CatchedPokemonComponent,
    PokemonEncounterComponent,
    LoadingSpinnerComponent,
    CachtedPokemonInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonRoutingModule,
    StoreModule.forFeature(featureKey, pokemonReducer),
    EffectsModule.forFeature([PokemonEffects])
  ]
})
export class PokemonModule { }
