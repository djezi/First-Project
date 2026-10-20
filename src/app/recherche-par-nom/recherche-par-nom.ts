import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Voiture } from '../model/voiture.model';
import { Voitureservice } from '../services/voiture';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  standalone: true,
  selector: 'app-recherche-par-nom',
  styles: ``,
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom implements OnInit{
  voitures!: Voiture[];
  searchTerm: string = '';
  constructor(private voitureService: Voitureservice) {}
  ngOnInit(): void {
    this.voitures = this.voitureService.listVoiture();
  }

}
