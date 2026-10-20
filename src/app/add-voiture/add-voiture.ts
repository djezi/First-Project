import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {Voiture} from '../model/voiture.model';
import {Voitureservice} from '../services/voiture';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
@Component({
  imports: [FormsModule],
  selector: 'app-add-voiture',
  styleUrl: './add-voiture.css',
  templateUrl: './add-voiture.html',
})
export class AddVoiture  implements OnInit {
  categories! : Categorie[]; 
  newIdCat! : number; 
  newCategorie! : Categorie; 
  newVoiture=new Voiture();
  constructor(private voitureservice:Voitureservice,
  private router: Router

  ){}
  addVoiture(){
    this.newCategorie = this.voitureservice.consulterCategorie(this.newIdCat); 
     this.newVoiture.categorie = this.newCategorie; 
    this.voitureservice.ajoutVoiture(this.newVoiture); 
    this.router.navigate(['/voitures']);
    this.newVoiture = new Voiture();
  } 
  ngOnInit(): void {
      this.categories = this.voitureservice.listeCategorie(); 
  }
}
