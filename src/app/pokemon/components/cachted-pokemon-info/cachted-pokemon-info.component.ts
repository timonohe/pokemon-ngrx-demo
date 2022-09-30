import {Component, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-cachted-pokemon-info',
  templateUrl: './cachted-pokemon-info.component.html',
  styleUrls: ['./cachted-pokemon-info.component.scss']
})
export class CachtedPokemonInfoComponent {

  @Input()
  pokemon: Pokemon;

  generatePokemonSpriteImageUrl(id: number): string {
    return `https://cdn.traction.one/pokedex/pokemon/${id}.png`
  }

}
