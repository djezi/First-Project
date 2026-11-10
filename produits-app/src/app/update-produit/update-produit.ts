import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h2>Modifier le produit</h2>
    <form *ngIf="currentProduit" (ngSubmit)="updateProduit()" #f="ngForm">
      <label>ID</label>
      <input name="id" [(ngModel)]="currentProduit.idProduit" disabled>

      <label>Nom du produit</label>
      <input name="nom" [(ngModel)]="currentProduit.nomProduit" required>

      <label>Prix</label>
      <input name="prix" type="number" [(ngModel)]="currentProduit.prixProduit" required>

      <label>Date de création</label>
      <input name="date" type="date" [(ngModel)]="currentProduit.dateCreation" required>

      <label>Catégorie</label>
      <select name="cat" [(ngModel)]="updatedCatId" required>
        <option *ngFor="let c of categories" [ngValue]="c.idCat">{{ c.nomCat }}</option>
      </select>

      <div class="actions">
        <button type="submit" class="btn btn-add" [disabled]="f.invalid">Enregistrer</button>
        <a routerLink="/produits" class="btn">Annuler</a>
      </div>
    </form>
  `
})
export class UpdateProduitComponent implements OnInit {
  currentProduit!: Produit;
  categories: Categorie[] = [];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats;
    });
    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe(prod => {
        this.currentProduit = prod;
        if (prod.dateCreation) {
          this.currentProduit.dateCreation = String(prod.dateCreation).substring(0, 10);
        }
        this.updatedCatId = this.currentProduit.categorie?.idCat;
      });
  }

  updateProduit() {
    this.currentProduit.categorie =
      this.categories.find(cat => cat.idCat == this.updatedCatId)!;
    this.produitService.updateProduit(this.currentProduit).subscribe(() => {
      this.router.navigate(['produits']);
    });
  }
}