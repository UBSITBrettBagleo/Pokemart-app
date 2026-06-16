import { Component, inject } from '@angular/core';
import { PokemartService } from '../pokemart-service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  pokemartService = inject(PokemartService);

}