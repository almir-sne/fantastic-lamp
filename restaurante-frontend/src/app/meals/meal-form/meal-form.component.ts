import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Meal} from "../shared/meal";
import {MealService} from "../shared/meal.service";
import {Restaurant} from "../../restaurants/shared/restaurant";
import {RestaurantService} from "../../restaurants/shared/restaurant.service";

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  meal: Meal = new Meal();
  restaurants: Restaurant[] = [];
  constructor(private restaurantService : RestaurantService,
              private mealService : MealService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(data => this.restaurants = data);

    this.route.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        this.mealService.getMeal(id).subscribe(data => this.meal = data);
      }
    });
  }

  save() {
    var result;
    if (this.meal.id){
      result = this.mealService.update(this.meal);
    } else {
      result = this.mealService.add(this.meal);
    }

    result.subscribe(data => this.router.navigate(['/meals']));
  }
}
