import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service/pokemon-service';

@Component({
  selector: 'app-kanto',
  standalone: true,
  templateUrl: './kanto.html',
  styleUrl: './kanto.css'
})
export class Kanto {

  pokemonService = inject(PokemonService);

}

