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
      name:'Mewtwo',
      type:'Psychic',
      heldItem:'Life Orb',
      description:'The strongest non-banned Psychic-type in the game.',
      image:'https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png'
      }
    ]);


    johtoPokemon = signal([
      {
        name:'Scizor',
        type:'Bug/Steel',
        heldItem:'Metal coat',
        description:'Cool bug Pokémon.',
        image:'https://img.pokemondb.net/artwork/large/scizor.jpg'
      },
      {
        name: 'Steelix',
        type: 'Steel/Ground',
        heldItem: 'Metal Coat',
        description: 'The he Iron Snake Pokémon.',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/2/2a/0208Steelix.png/250px-0208Steelix.png'
      },
      {
        name: 'Heracross',
        type: 'Bug/Fighting',
        heldItem: 'Black Belt',
        description: 'The powerful horned beetle.',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Pok%C3%A9mon_Heracross_art.png/250px-Pok%C3%A9mon_Heracross_art.png'
      },
      {
        name: 'Tyranitar',
        type: 'Rock/Dark',
        heldItem: 'Hard Stone',
        description: 'The godzilla like Pokémon.',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/0/09/0248Tyranitar.png/250px-0248Tyranitar.png'
      },
      {
        name: 'Lugia',
        type: 'Psychic/Flying',
        heldItem: 'Twisted Spoon',
        description: 'The guardian of the seas.',
        image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/249.png'
      },
      {
        name: 'Crobat',
        type: 'Poison/Flying',
        heldItem: 'Sharp Beak',
        description: 'The speedy four-winged bat.',
        image: 'https://img.pokemondb.net/artwork/large/crobat.jpg'
      }
    ]);
    
    hoennPokemon = signal([
      {
        name: 'Septile',
        type: 'Grass',
        heldItem: 'Focus sash',
        description: 'The swift forest pokemon.',
        image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/254.png'
      },
      {
        name: 'Mightyena',
        type: 'Dark',
        heldItem: 'Black Glasses',
        description: 'The black wolf Pokémon.',
        image: 'https://img.pokemondb.net/artwork/avif/mightyena.avif'
      },
      {
        name: 'Salamence',
        type: 'Dragon/Flying',
        heldItem: 'Dragon Fang',
        description: 'The dragon that finally grew wings.',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/8/8a/0373Salamence.png/250px-0373Salamence.png'
      },
      {
        name: 'Metagross',
        type: 'Steel/Psychic',
        heldItem: 'Metal Coat',
        description: 'The supercomputer iron leg Pokémon.',
        image: 'https://static.wikia.nocookie.net/project-polaro-alpha/images/1/18/0376_Shiny_Metagross.png/revision/latest/scale-to-width/360?cb=20250523041137'
      },
      {
        name: 'Crawdaunt',
        type: 'Water/Dark',
        heldItem: 'Mystic Water',
        description: 'The Pokémon most look like Mr. Krabs.',
        image: 'https://img.pokemondb.net/artwork/avif/crawdaunt.avif'
      },
      {
        name: 'Rayquaza',
        type: 'Dragon/Flying',
        heldItem: 'Life Orb',
        description: 'The ruler of the skies. TEAM SKY!!',
        image: 'https://img.pokemondb.net/artwork/large/rayquaza.jpg'
      }
    ]);
  
  }