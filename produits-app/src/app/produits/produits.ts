import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Liste des produits</h2>
    <a routerLink="/add-produit" class="btn btn-add">+ Ajouter un produit</a>

    <table>
      <thead>
        <tr>
          <th>ID</th><th>Nom</th><th>Prix</th>
          <th>Date création</th><th>Catégorie</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let p of produits">
          <td>{{ p.idProduit }}</td>
          <td>{{ p.nomProduit }}</td>
          <td>{{ p.prixProduit }} DT</td>
          <td>{{ p.dateCreation | date: 'dd/MM/yyyy' }}</td>
          <td>{{ p.categorie?.nomCat }}</td>
          <td>
            <a [routerLink]="['/update-produit', p.idProduit]" class="btn btn-edit">Modifier</a>
            <button class="btn btn-del" (click)="supprimerProduit(p)">Supprimer</button>
          </td>
        </tr>
        <tr *ngIf="produits.length === 0">
          <td colspan="6" class="empty">Aucun produit</td>
        </tr>
      </tbody>
    </table>
  `
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduit().subscribe(prods => {
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    if (confirm('Etes-vous sûr ?')) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        this.chargerProduits();
      });
    }
  }
}