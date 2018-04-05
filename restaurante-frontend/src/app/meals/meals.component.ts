import {Component, OnInit} from '@angular/core';
import {MealService} from "./shared/meal.service";
import {Meal} from "./shared/meal";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[] = [];

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
    this.mealService.getMeals().subscribe(data => this.meals = data);
  }

  delete(meal) {
    if (confirm("Você tem certeza? ")) {
      this.meals.splice(this.meals.indexOf(meal), 1);

      this.mealService.delete(meal.id)
        .subscribe(null);
    }
  }

}
