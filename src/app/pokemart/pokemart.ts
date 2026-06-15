import { Component, inject } from '@angular/core';
import { PokemartService } from '../pokemart-service';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css'
})
export class Pokemart {

  pokemartService = inject(PokemartService);

}