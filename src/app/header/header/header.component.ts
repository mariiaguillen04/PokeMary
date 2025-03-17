import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {

  constructor(private pokemonService: PokemonService) {}

  buscarPokemon(termino: string): void {
    if (termino.trim()) {
      this.pokemonService.getPokemonByName(termino.trim().toLowerCase()).subscribe(
        (pokemon: Pokemon) => {
          console.log('Pokémon encontrado:', pokemon);
        },
        error => {
          console.error('Pokémon no encontrado:', error);
        }
      );
    }
  }
}
