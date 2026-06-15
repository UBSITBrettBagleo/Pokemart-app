import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  kantoPokemon = signal([
    {
    name:'Charizard',
    type:'Fire/Flying',
    heldItem:'Charcoal',
    description:'My personal starter.',
    image:'https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png'
    },
    {
    name:'Gengar',
    type:'Ghost/Poison',
    heldItem:'Spell Tag',
    description:'My favorite Pokemon.',
    image:'https://upload.wikimedia.org/wikipedia/en/b/bf/Pok%C3%A9mon_Gengar_art.png'
    },
    {
    name:'Snorlax',
    type:'Normal',
    heldItem:'Leftovers',
    description:'My spirit animal.',
    image:'https://upload.wikimedia.org/wikipedia/en/3/3f/Pok%C3%A9mon_Snorlax_art.png'
    },
    {
      name:'Raichu',
      type:'Electric',
      heldItem:'Light Ball',
      description:'The underatted electric mouse.',
      image:'https://upload.wikimedia.org/wikipedia/en/3/34/Raichu.png'
      },
    {
    name:'Dragonite',
    type:'Dragon/Flying',
    heldItem:'Dragon Fang',
    description:'Dragon Pokémon.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLY_dCtUZm6l0EE9DV98LrTBSNRNRMRfUXIw&s'
    },
    {
      name:'Scizor',
      type:'Bug/Steel',
      heldItem:'Metal coat',
      description:'Cool bug Pokémon.',
      image:'https://img.pokemondb.net/artwork/large/scizor.jpg'
      }
    ]);


    johtoPokemon = signal([
      {
        name:'Typhlosion',
        type:'Fire',
        heldItem:'Charcoal',
        description:'Starter',
        image:'...'
      }
    ]);
  
    
    hoennPokemon = signal([
      {
        name:'Blaziken',
        type:'Fire/Fighting',
        heldItem:'Charcoal',
        description:'Starter',
        image:'...'
      }
    ]);
  
  }