import { Routes } from '@angular/router';
import {Voitures} from './voitures/voitures';
import { AddVoiture } from './add-voiture/add-voiture';
import { UpdateVoiture } from './updatevoiture/updatevoiture';

export const routes: Routes = [
    {path: "voitures", component : Voitures}, 
    {path: "add-voiture", component : AddVoiture}, 
    {path:"",redirectTo:"voitures",pathMatch:"full"},
    { path: 'updatevoiture/:id', component: UpdateVoiture }
    
];
