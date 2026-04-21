import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  // Buscar os 1300+ pokemons (garante que pega todas as gerações)
  private allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1500';

  constructor(private http: HttpClient) { }

  getPokemons(p0: string): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get<any>(this.allPokemonsUrl).pipe(
      map(res => res.results)
    )
  }

  getPokemonDetails(url: string): Observable<any> {
    // Usamos a URL que veio na listagem para pegar os detalhes completos
    return this.http.get<any>(url);
  }

}
