import {Component, OnInit} from '@angular/core';
import {Restaurant} from './shared/restaurant';
import {RestaurantService} from "./shared/restaurant.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {
  name: String;
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(data => this.restaurants = data);
  }

  search() {
    this.restaurantService.getRestaurants(this.name).subscribe(data => {
      this.restaurants = data
    });
  }

  delete(restaurant) {
    if (confirm("Você tem certeza? ")) {
      this.restaurants.splice(this.restaurants.indexOf(restaurant), 1);

      this.restaurantService.delete(restaurant.id)
        .subscribe(null);
    }
  }

}
