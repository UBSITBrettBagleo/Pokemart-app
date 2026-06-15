import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [],
  templateUrl: './johto.html',
  styleUrl: './johto.css'
})
export class Johto {

  pokemonService = inject(PokemonService);

}