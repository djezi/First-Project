import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {Voiture} from '../model/voiture.model';
import {Voitureservice} from '../services/voiture';
import { Router } from '@angular/router';
@Component({
  imports: [FormsModule],
  selector: 'app-add-voiture',
  styleUrl: './add-voiture.css',
  templateUrl: './add-voiture.html',
})
export class AddVoiture  implements OnInit {
  newVoiture=new Voiture();
  constructor(private voitureservice:Voitureservice,
  private router: Router

  ){}
  addVoiture(){
    this.voitureservice.ajoutVoiture(this.newVoiture); 
    this.router.navigate(['/voitures']);
    this.newVoiture = new Voiture();
  } 
  ngOnInit(): void {
      
  }
}
