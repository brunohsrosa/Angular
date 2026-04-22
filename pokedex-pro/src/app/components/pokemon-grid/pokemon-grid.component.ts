import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-grid',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent implements OnInit {
  allPokemons: any[] = [];      // O "bancão" de dados com os 1300+ pokemons
  filteredList: any[] = [];     // A lista resultante do filtro (Tipo ou Busca)
  pokemons: any[] = [];         // O que aparece na tela (fatiado pelo limit)

  offset: number = 0;
  limit: number = 8;
  currentType: string = 'all';

  private searchSubject = new Subject<string>();

  constructor(private pokemonService: PokemonService) { }

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
      this.filteredList = data; // Inicialmente, a lista filtrada são todos
      this.updateDisplayList();
    });
  }

  onSearchChanged(term: string) {
    this.searchSubject.next(term);
  }

  executeFilter(term: string) {
    const searchLower = term.toLowerCase().trim();

    if (!searchLower) {
      this.filteredList = this.allPokemons;
    } else {
      this.filteredList = this.allPokemons.filter(poke =>
        poke.name.toLowerCase().includes(searchLower)
      );
    }

    this.limit = 8; // Resetamos o limite na busca
    this.updateDisplayList();
  }

  onTypeChanged(type: string) {
    this.currentType = type;
    this.limit = 8; // Resetamos o limite ao trocar de tipo

    if (type === 'all') {
      this.filteredList = this.allPokemons;
      this.updateDisplayList();
    } else {
      this.pokemonService.getPokemonByType(type).subscribe((data: any) => {
        // Mapeamento para manter o padrão { name, url }
        this.filteredList = data.pokemon.map((p: any) => p.pokemon);
        this.updateDisplayList();
      });
    }
  }

  loadMore() {
    this.limit += 8;
    this.updateDisplayList();
  }

  // Função auxiliar para atualizar o que o HTML vê
  updateDisplayList() {
    this.pokemons = this.filteredList.slice(0, this.limit);
  }

  get hasMorePokemons(): boolean {
    // Se a lista exibida for menor que a lista filtrada total, ainda há o que carregar
    return this.pokemons.length < this.filteredList.length;
  }

  resetSearch() {
    this.loadAll();
  }
}
