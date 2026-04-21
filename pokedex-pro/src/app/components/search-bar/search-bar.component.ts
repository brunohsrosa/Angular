import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="search-container">
      <input
        type="text"
        [(ngModel)]="searchTerm"
        (input)="onSearch()"
        placeholder="Pesquisar Pokémon...">
    </div>
  `,
  styles: [`
    .search-container { padding: 20px; text-align: center; }
    input {
      width: 100%;
      max-width: 400px;
      padding: 12px 20px;
      border-radius: 25px;
      border: 1px solid #ddd;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      outline: none;
    }
  `]
})
export class SearchBarComponent {
  searchTerm: string = '';
  @Output() searchChanged = new EventEmitter<string>();

  onSearch() {
    this.searchChanged.emit(this.searchTerm);
  }
}
