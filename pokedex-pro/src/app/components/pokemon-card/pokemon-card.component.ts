// src/app/pokemon-card/pokemon-card.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../pokemon.service';
import { POKEMON_COLORS } from '../../styles/pokemon-color';
import { TRADUCOES_STATS, TRADUCOES_TIPOS } from '../../styles/pokemon-translations';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: any;
  details: any;          // Guardar os tipos e ID real
  cardColor: string = '#f8f8f8'; // Cor padrão
  isModalOpen = false;

  readonly traducoesTipos = TRADUCOES_TIPOS;
  readonly traducoesStats = TRADUCOES_STATS;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  // this.pokemon.url é aquela URL que você postou: "https://pokeapi.co/api/v2/pokemon/1/"
  this.pokemonService.getPokemonDetails(this.pokemon.url).subscribe({
    next: (data) => {
      // Agora 'data' é aquele JSON gigante da sua imagem com "types", "weight", etc.
      this.details = data;

      if (this.details.types && this.details.types.length > 0) {
        const primaryType = this.details.types[0].type.name;
        this.cardColor = POKEMON_COLORS[primaryType] || '#cccccc';
      }
    }
  });
}

toggleModal() {
  if (this.details) { // Só abre se os detalhes já tiverem carregado
    this.isModalOpen = !this.isModalOpen;
  }
}



  getPokemonId() {
    const parts = this.pokemon.url.split('/');
    return parts[parts.length - 2];
  }

  getOfficialArtwork() {
    const id = this.getPokemonId();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  mostrarTipo() {
  if (this.details && this.details.types) {
    // Extrai apenas os nomes dos tipos: ['fire', 'flying']
    const tipos = this.details.types.map((t: any) => t.type.name).join(', ');

    alert(`O Pokémon ${this.pokemon.name.toUpperCase()} é do tipo: ${tipos}`);
  } else {
    alert('Carregando informações...');
  }
}

getTypeColor(typeName: string): string {
  // POKEMON_COLORS deve ser aquele objeto que criamos com as cores de cada tipo
  return POKEMON_COLORS[typeName.toLowerCase()] || '#cccccc';
}

  cardClick(){
    //alert(this.getPokemonId());
    alert(this.mostrarTipo());
  }

  // Métodos auxiliares para o HTML
  getTraducaoTipo(tipo: string): string {
    return this.traducoesTipos[tipo.toLowerCase()] || tipo;
  }

  getTraducaoStat(stat: string): string {
    return this.traducoesStats[stat.toLowerCase()] || stat;
  }
}
