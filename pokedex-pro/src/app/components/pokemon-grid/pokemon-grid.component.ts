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
  offset: number = 0;
  limit: number = 8;
  private searchSubject = new Subject<string>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadAll();

    //this.loadMore();

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
      this.pokemons = this.allPokemons.slice(0, this.limit); //incrementa clicando em carregar mais
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

  onTypeChanged(type: string) {
  if (type === 'all') {
    this.pokemons = this.allPokemons.slice(0, 20);
    return;
  }

  // Como o allPokemons só tem nome e URL, o ideal é filtrar
  // após os detalhes carregarem ou usar o serviço para buscar por tipo.
  // Se quiser filtrar o que já está na tela:
  this.pokemonService.getPokemonByType(type).subscribe((data: any) => {
    // A API de tipos retorna uma estrutura diferente, mapeamos para pegar os pokemons
    this.pokemons = data.pokemon.map((p: any) => p.pokemon).slice(0, 40);
  });
}

loadMore() {
    this.limit += 8;
    this.loadAll();




  }

  resetSearch() {
    this.loadAll();
  }
}
