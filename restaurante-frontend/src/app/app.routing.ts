import { Routes, RouterModule }   from '@angular/router';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantFormComponent } from './restaurants/restaurant-form/restaurant-form.component';
import { HomeComponent } from './home/home.component';
import {ModuleWithProviders} from "@angular/core";


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurant/new', component: RestaurantFormComponent},
  { path: 'restaurant/:id', component: RestaurantFormComponent},
  { path: 'restaurant/:id/edit', component: RestaurantFormComponent}
];

// Exporta a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
