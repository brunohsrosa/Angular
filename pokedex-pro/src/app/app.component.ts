import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PokemonService } from './pokemon.service';
import { PokemonGridComponent } from './components/pokemon-grid/pokemon-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PokemonGridComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pokedex-pro';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemons('').subscribe(
      (data) => console.log('Dados da Api: ', data),
      (err) => console.error('Erro ao buscar: ', err)
    )
  }
}
