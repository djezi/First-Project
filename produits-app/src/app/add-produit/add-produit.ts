import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h2>Ajouter un produit</h2>
    <form (ngSubmit)="addProduit()" #f="ngForm">
      <label>Nom du produit</label>
      <input name="nom" [(ngModel)]="newProduit.nomProduit" required>

      <label>Prix</label>
      <input name="prix" type="number" [(ngModel)]="newProduit.prixProduit" required>

      <label>Date de création</label>
      <input name="date" type="date" [(ngModel)]="newProduit.dateCreation" required>

      <label>Catégorie</label>
      <select name="cat" [(ngModel)]="newIdCat" required>
        <option *ngFor="let c of categories" [ngValue]="c.idCat">{{ c.nomCat }}</option>
      </select>

      <div class="actions">
        <button type="submit" class="btn btn-add" [disabled]="f.invalid">Ajouter</button>
        <a routerLink="/produits" class="btn">Annuler</a>
      </div>
    </form>
  `
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories: Categorie[] = [];
  newIdCat!: number;

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

  addProduit() {
    this.newProduit.categorie =
      this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.produitService.ajouterProduit(this.newProduit).subscribe(() => {
      this.router.navigate(['produits']);
    });
  }
}