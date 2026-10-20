import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {Voiture} from '../model/voiture.model';
import {Voitureservice} from '../services/voiture';

@Component({
  imports: [CommonModule,FormsModule,RouterLink],
  selector: 'app-voitures',
  styleUrl: './voitures.css',
  templateUrl: './voitures.html',
})
export class Voitures implements OnInit{
  voitures:Voiture[];
  constructor(private voitureservice:Voitureservice) {
  this.voitures=voitureservice.listVoiture();
  }
  ngOnInit(): void {
      
  }
  supprimer(v:Voiture){
    let conf = confirm("Êtes-vous sûr de vouloir supprimer?");
    if (conf) {
      this.voitureservice.supprimerVoiture(v);
      this.voitures = this.voitureservice.listVoiture();
    }
  }
}
