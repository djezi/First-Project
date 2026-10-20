import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../model/voiture.model';
import { Voitureservice } from '../services/voiture';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-update-voiture',
  styleUrls: ['./updatevoiture.css'],
  templateUrl: './updatevoiture.html'
  
})
export class UpdateVoiture implements OnInit {
  currentVoiture = new Voiture();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private voitureService: Voitureservice
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.currentVoiture = this.voitureService.consulterVoiture(id);
  }

  onUpdateVoiture() {
    this.voitureService.updateVoiture(this.currentVoiture);
    this.router.navigate(['/voitures']);
  }
}