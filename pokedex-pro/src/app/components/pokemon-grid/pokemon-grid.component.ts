import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-grid',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent, SearchBarComponent],
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent implements OnInit {
  allPokemons: any[] = [];
  pokemons: any[] = []; // Esta é a variável que o HTML usa no *ngFor
  private searchSubject = new Subject<string>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadAll();

    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.executeFilter(term);
    });
  }

  loadAll() {
    this.pokemonService.getPokemonByName('').subscribe(data => {
      this.allPokemons = data;
      this.pokemons = this.allPokemons.slice(0, 20);
    });
  }

  onSearchChanged(term: string) {
    this.searchSubject.next(term);
  }

  executeFilter(term: string) {
    if (!term.trim()) {
      this.pokemons = this.allPokemons.slice(0, 20);
      return;
    }
    const searchLower = term.toLowerCase();
    this.pokemons = this.allPokemons.filter(poke =>
      poke.name.toLowerCase().includes(searchLower)
    ).slice(0, 50);
  }

  resetSearch() {
    this.loadAll();
  }
}
