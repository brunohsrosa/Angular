import { Component, Output, EventEmitter } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }
  ];

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>(); /* Renomeando o evento para onFilter */

  onFilter () {
    console.log(this.filterOptions);
    this.onFilterEmitt.emit(this.filterOptions); /* Emitindo o evento com os dados do filtro */
  }

  dateSeleted(date: any){
    console.log(date);
    console.log(date instanceof Date);
    console.log(date.getMonth());
  }
}
