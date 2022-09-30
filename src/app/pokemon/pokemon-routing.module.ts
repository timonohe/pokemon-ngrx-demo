import {RouterModule, Routes} from "@angular/router";
import {CatchedPokemonComponent} from "./components/catched-pokemon/catched-pokemon.component";
import {PokemonEncounterComponent} from "./components/pokemon-encounter/pokemon-encounter.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: CatchedPokemonComponent
  },
  {
    path: 'encounter',
    component: PokemonEncounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
