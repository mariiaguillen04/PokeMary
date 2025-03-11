import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: false,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pokemons: Pokemon[] = [];
  paginaActual: number = 0;
  pageSize: number = 20;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemonsFromService();
  }

  getPokemonsFromService(): void {
    this.pokemonService.getPokemons(this.paginaActual * this.pageSize, this.pageSize).subscribe(data => {
      this.pokemons = data.results.map((result: any) => {
        const { name, url } = result;
        const height = result.height || 0;
        const weight = result.weight || 0;
        const abilities = result.abilities || [];
        const types = result.types || [];
        const stats = result.stats || [];
  
        return new Pokemon(name, url, height, weight, abilities, types, stats);
      });
    });
  }
  

  cambiarPagina(next: boolean): void {
    this.paginaActual = next ? this.paginaActual + 1 : this.paginaActual - 1;
    this.getPokemonsFromService();
  }

  verDetalles(pokemon: Pokemon): void {
    this.router.navigate(['/descripcion', pokemon.id]);
  }

}
