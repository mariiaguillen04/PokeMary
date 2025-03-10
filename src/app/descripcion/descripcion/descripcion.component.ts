import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-descripcion',
  standalone: false,
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent implements OnInit {
  pokemon: Pokemon | undefined;

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
        });
      }
    });
  }
  

  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      fire: '#F08030',
      water: '#6890F0',
      grass: '#78C850',

    };
    return typeColors[type] || '#000'; 
  }
}
