import { Injectable } from '@angular/core';
import {Voiture} from '../model/voiture.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})

export class Voitureservice {
    voitures:Voiture[];
    categorie!:Categorie[];
    constructor(){
        this.categorie=[
            {idCat:1,nomCat:"v8"},
            {idCat:2,nomCat:"RS"}
        ]
        let savedVoitures = localStorage.getItem('voitures');
        if (savedVoitures) {
            this.voitures = JSON.parse(savedVoitures);
        } else {
            
            this.voitures = [
            { idVoiture: 1, nomVoiture: "BMW", prixVoiture: 50000, dateCreation: new Date("2018-07-30"),categorie:{idCat:1,nomCat:"v8"} },
            { idVoiture: 2, nomVoiture: "AUDI", prixVoiture: 60000, dateCreation: new Date("2019-05-12"),categorie:{idCat:2,nomCat:"RS"} },
            { idVoiture: 3, nomVoiture: "MERCEDES", prixVoiture: 75000, dateCreation: new Date("2020-01-15"), categorie:{idCat:1,nomCat:"v8"} },
            { idVoiture: 4, nomVoiture: "RENAULT", prixVoiture: 25000, dateCreation: new Date("2021-10-05"), categorie:{idCat:2,nomCat:"RS"}}
            ];
        }
    }
    listVoiture():Voiture[]{
        return this.voitures;
    }
    ajoutVoiture(voi:Voiture){
        this.voitures.push(voi);
        localStorage.setItem('voitures', JSON.stringify(this.voitures));
    }
    supprimerVoiture(v:Voiture){
        const index = this.voitures.indexOf(v);
        if (index > -1) {
            this.voitures.splice(index, 1);
            localStorage.setItem('voitures', JSON.stringify(this.voitures));
        }
    }
    consulterVoiture(id: number): Voiture {
    return this.voitures.find(v => v.idVoiture == id)!;

    }

    updateVoiture(voiture: Voiture) {
    const index = this.voitures.findIndex(v => v.idVoiture == voiture.idVoiture);
        if (index > -1) {
        this.voitures[index] = voiture;
        localStorage.setItem('voitures', JSON.stringify(this.voitures));
        }
    }
    listeCategorie():Categorie[]{
        return this.categorie;
    }
    consulterCategorie(id:number): Categorie{     
        return this.categorie.find(cat => cat.idCat  == id)!; 
    } 
    rechercherParCategorie(idCat: number): Voiture[] {
            return this.voitures.filter(v => v.categorie && v.categorie.idCat == idCat);
    } 
    
}
