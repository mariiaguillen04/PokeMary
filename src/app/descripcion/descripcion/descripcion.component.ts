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
  pokemon: Pokemon | undefined; // Variable para almacenar la información del Pokémon
  img: string = ''; // Variable para la URL de la imagen del Pokémon
  gift: string = ''; // Variable para la URL del GIF animado del Pokémon

  constructor(
    private route: ActivatedRoute, // Inyecta el servicio ActivatedRoute para trabajar con rutas
    private pokemonService: PokemonService // Inyecta el servicio de Pokémon para obtener datos
  ) { }

  ngOnInit(): void {
    // Método que se ejecuta al inicializar el componente
    this.route.params.subscribe(params => {
      // Se suscribe a los parámetros de la ruta activa
      const id = +params['id']; // Obtiene el parámetro 'id' de la ruta y lo convierte a número
      if (id) {
        // Si hay un ID válido
        this.pokemonService.getPokemonById(id).subscribe(pokemon => {
          // Llama al servicio para obtener los datos del Pokémon por ID
          console.log('Pokemon data:', pokemon); // Imprime los datos del Pokémon en la consola (para debug)
          this.pokemon = pokemon; // Asigna los datos del Pokémon a la variable
          // Asigna las URL de la imagen y el GIF animado del Pokémon usando el ID
          this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          this.gift = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
        });
      }
    });
  }

  getBackgroundColor(type: string): string {
    // Método para obtener el color de fondo según el tipo de Pokémon
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
    return typeColors[type] || '#ffffff'; 
  }
}
