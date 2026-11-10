import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <h1>Gestion des produits</h1>
      <nav>
        <a routerLink="/produits">Produits</a>
        <a routerLink="/add-produit">Ajouter</a>
      </nav>
    </header>
    <main><router-outlet></router-outlet></main>
  `
})
export class App {}