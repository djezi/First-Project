import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../model/voiture.model';
import { Voitureservice } from '../services/voiture';
import { Categorie } from '../model/categorie.model';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-update-voiture',
  templateUrl: './updatevoiture.html'
  
})
export class UpdateVoiture implements OnInit {
  currentVoiture = new Voiture();
  categories! : Categorie[]; 
  updatedCatId! : number; 
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private voitureService: Voitureservice
  ) {}

  ngOnInit(): void {
    this.categories = this.voitureService.listeCategorie(); 
    const id = this.activatedRoute.snapshot.params['id'];
    this.currentVoiture = this.voitureService.consulterVoiture(id);
    if (this.currentVoiture && this.currentVoiture.categorie) {
      this.updatedCatId = this.currentVoiture.categorie.idCat;
    }
  }

  onUpdateVoiture() {
    this.currentVoiture.categorie=this.voitureService.consulterCategorie(this.updatedCatId);
    this.voitureService.updateVoiture(this.currentVoiture);
    this.router.navigate(['/voitures']);
  }
}