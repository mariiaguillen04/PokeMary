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
  busqueda: string = '';

  constructor(private pokemonService: PokemonService) { }

  buscarPokemon(): void {
    if (this.busqueda.trim()) {
      this.pokemonService.getPokemonByName(this.busqueda.trim().toLowerCase()).subscribe(
        (pokemon: Pokemon) => {
          console.log(pokemon); 
        },
        error => {
          console.error('Pokémon no encontrado', error);
        }
      );
    }
  }
}
