import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantFormComponent } from './restaurants/restaurant-form/restaurant-form.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';
import {RestaurantService} from "./restaurants/shared/restaurant.service";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }