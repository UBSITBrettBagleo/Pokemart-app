import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css'
})
export class Hoenn {

  pokemonService = inject(PokemonService);

}