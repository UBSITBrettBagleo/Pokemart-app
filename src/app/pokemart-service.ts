import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemartService {

  items = signal([
    {name:'Potion', price:300},
    {name:'Super Potion', price:700},
    {name:'Hyper Potion', price:1200},
    {name:'Max Potion', price:2500},
    {name:'Revive', price:1500},
    {name:'Full Restore', price:3000},
    {name:'Pokeball', price:200},
    {name:'Great Ball', price:600},
    {name:'Ultra Ball', price:1200},
    {name:'Rare Candy', price:5000}
  ]);

  private cartItems = signal<any[]>([]);

  cart = this.cartItems.asReadonly();

  totalPrice = computed(() =>
    this.cartItems().reduce((sum,item) => sum + item.price,0)
  );

  addToCart(item:any){
    this.cartItems.update(current => [...current,item]);
  }

  clearCart(){
    this.cartItems.set([]);
  }

}