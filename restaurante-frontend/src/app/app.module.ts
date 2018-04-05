import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantFormComponent} from './restaurants/restaurant-form/restaurant-form.component';
import {HomeComponent} from './home/home.component';

import {routing} from './app.routing';
import {RestaurantService} from "./restaurants/shared/restaurant.service";
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {MealsComponent} from './meals/meals.component';
import {MealFormComponent} from "./meals/meal-form/meal-form.component";
import {MealService} from "./meals/shared/meal.service";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantFormComponent,
    HomeComponent,
    MealsComponent,
    MealFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    routing
  ],
  providers: [
    RestaurantService,
    MealService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
