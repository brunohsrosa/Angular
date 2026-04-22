import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() searchChanged = new EventEmitter<string>();
  @Output() typeChanged = new EventEmitter<string>();

  onSearch(event: any) {
    const value = event.target.value;
    // Emitimos o valor para quem estiver ouvindo o Header
    this.searchChanged.emit(value);
  }

  // Aproveite e já deixe os métodos dos filtros prontos (mesmo que vazios por enquanto)
  filterByType(type: string) {
    if (type === 'all') {
      // Se quiser limpar visualmente o campo de busca no Header:
      const searchInput = document.querySelector('.search-container input') as HTMLInputElement;
      if (searchInput) searchInput.value = '';

      // Avisa que a busca por texto agora é vazia
      this.searchChanged.emit('');
    }
    console.log('Filtrando por tipo:', type);
    this.typeChanged.emit(type);
  }

}


