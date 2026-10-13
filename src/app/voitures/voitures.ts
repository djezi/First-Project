import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import {Voiture} from '../model/voiture.model';
import {Voitureservice} from '../services/voiture';

@Component({
  imports: [CommonModule,FormsModule],
  selector: 'app-voitures',
  styleUrl: './voitures.css',
  templateUrl: './voitures.html',
})
export class Voitures implements OnInit{
  voiture:Voiture[] | undefined;
  constructor(private voitureservice:Voitureservice) {
    this.voiture=voitureservice.listVoiture();
  }
  ngOnInit(): void {
      
  }
}
