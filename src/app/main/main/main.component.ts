import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: false,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pokemons: Pokemon[] = [];
  currentPage: number = 0;
  pageSize: number = 20;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonsFromService();
  }

  getPokemonsFromService(): void {
    this.pokemonService.getPokemons(this.currentPage * this.pageSize, this.pageSize).subscribe(data => {
      this.pokemons = data.results.map((pokemon: any) => new Pokemon(pokemon.name, pokemon.url, pokemon.height,pokemon.weight));
    });
  }

  changePage(next: boolean): void {
    this.currentPage = next ? this.currentPage + 1 : this.currentPage - 1;
    this.getPokemonsFromService();
  }
}
