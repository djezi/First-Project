import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ضروري لـ routerLink
import { Voiture } from '../model/voiture.model';
import { Categorie } from '../model/categorie.model';
import { Voitureservice } from '../services/voiture';

@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // أضفنا RouterModule هنا
  templateUrl: './recherche-par-categorie.html'
})
export class RechercheParCategorie implements OnInit {
  
  voitures!: Voiture[];
  idCategorie!: number;
  categories!: Categorie[];

  constructor(private voitureService: Voitureservice) { }

  ngOnInit(): void {
    this.categories = this.voitureService.listeCategorie();
  }
  onChange() {
    this.voitures = this.voitureService.rechercherParCategorie(this.idCategorie);
  }
  supprimerVoiture(v: Voiture) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer cette voiture ?");
    if (conf) {
      this.voitureService.supprimerVoiture(v);
      this.onChange(); 
    }
  }
}