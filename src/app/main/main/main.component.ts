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
    // Método que se ejecuta al inicializar el componente
    this.getPokemonsFromService(); // Llama al método para obtener los Pokémon desde el servicio
  }

  getPokemonsFromService(): void {
    // Método para obtener los Pokémon desde el servicio
    this.pokemonService.getPokemons(this.paginaActual * this.pageSize, this.pageSize).subscribe(data => {
      // Llama al servicio para obtener los Pokémon con los parámetros de paginación
      this.pokemons = data.results.map((result: any) => {
        // Mapea los resultados obtenidos
        const { name, url } = result; // Extrae el nombre y la URL del Pokémon
        const height = result.height || 0; // Asigna la altura o 0 si no está disponible
        const weight = result.weight || 0; // Asigna el peso o 0 si no está disponible
        const abilities = result.abilities || []; // Asigna las habilidades o un array vacío si no están disponibles
        const types = result.types || []; // Asigna los tipos o un array vacío si no están disponibles
        const stats = result.stats || []; // Asigna las estadísticas o un array vacío si no están disponibles
  
        // Retorna un nuevo objeto Pokémon con los datos extraídos
        return new Pokemon(name, url, height, weight, abilities, types, stats);
      });
    });
  }
  

  cambiarPagina(next: boolean): void {
    // Método para cambiar la página
    this.paginaActual = next ? this.paginaActual + 1 : this.paginaActual - 1; // Incrementa o decrementa la página actual
    this.getPokemonsFromService(); // Llama al método para obtener los Pokémon desde el servicio
  }

  verDetalles(pokemon: Pokemon): void {
    // Método para ver los detalles de un Pokémon
    this.router.navigate(['/descripcion', pokemon.id]); // Navega a la ruta de descripción del Pokémon con el ID
  }

}
