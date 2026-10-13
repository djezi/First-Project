import { Routes } from '@angular/router';
import {Voitures} from './voitures/voitures';
import { AddVoiture } from './add-voiture/add-voiture';

export const routes: Routes = [
    {path: "voitures", component : Voitures}, 
    {path: "add-voiture", component : AddVoiture}, 
    {path:"",redirectTo:"voitures",pathMatch:"full"}
    
];
