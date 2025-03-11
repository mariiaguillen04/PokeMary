import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-descripcion',
  standalone: false,
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  pokemon: Pokemon | undefined;
  img: string = '';
  gift: string = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.pokemonService.getPokemonById(id).subscribe(pokemon => {
          console.log('Pokemon data:', pokemon);
          this.pokemon = pokemon;
          this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          this.gift = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
        });
      }
    });
  }

  getBackgroundColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      fire: '#F08030',
      water: '#6890F0',
      grass: '#78C850',
      electric: '#F8D030',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dark: '#705848',
      dragon: '#7038F8',
      steel: '#B8B8D0',
      fairy: '#EE99AC',
      normal: '#A8A878'
    };
    return typeColors[type] || '#ffffff'; // Valor por defecto si no se encuentra el tipo
  }
}
