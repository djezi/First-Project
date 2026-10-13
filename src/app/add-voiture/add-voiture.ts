import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {Voiture} from '../model/voiture.model';
import {Voitureservice} from '../services/voiture';
@Component({
  imports: [FormsModule],
  selector: 'app-add-voiture',
  styleUrl: './add-voiture.css',
  templateUrl: './add-voiture.html',
})
export class AddVoiture  implements OnInit {
  newvoiture=new Voiture();
  constructor(private voitureservice:Voitureservice){}
  addVoiture(){
    this.voitureservice.ajoutVoiture(this.newvoiture); 
    this.newvoiture = new Voiture();
  } 
  ngOnInit(): void {
      
  }
}
