import { Injectable } from '@angular/core'; 
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { environment } from '../../environments/environment'; 
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Marca el servicio como un servicio proporcionado en la raíz del proyecto
})
export class PokemonService {
  private baseUrl: string = environment.baseUrl; // Asigna la URL base del API desde el entorno

  constructor(private http: HttpClient) { }
  // Constructor que inyecta HttpClient para realizar solicitudes HTTP

  getPokemons(offset: number, limit: number): Observable<any> {
    // Método para obtener una lista de Pokémon con paginación
    let params = new HttpParams()
      .set('offset', offset.toString()) // Establece el parámetro 'offset'
      .set('limit', limit.toString()); // Establece el parámetro 'limit'

    return this.http.get<any>(`${this.baseUrl}/pokemon`, { params });
    // Realiza una solicitud HTTP GET a la URL del API con los parámetros especificados y retorna un Observable con los resultados
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    // Método para obtener un Pokémon por nombre
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`);
    // Realiza una solicitud HTTP GET a la URL del API con el nombre del Pokémon y retorna un Observable con el resultado
  }

  getPokemonById(id: number): Observable<Pokemon> {
    // Método para obtener un Pokémon por ID
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
    // Realiza una solicitud HTTP GET a la URL del API con el ID del Pokémon y retorna un Observable con el resultado
  }
}
