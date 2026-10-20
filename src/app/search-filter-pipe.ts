import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from './model/voiture.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Voiture[], filterText: string): Voiture[] {
    if (!list || !filterText) {
      return list;
    }
    return list.filter(item => 
      item.nomVoiture?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}