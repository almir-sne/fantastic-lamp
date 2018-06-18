import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../shared/restaurant.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Restaurant} from "../shared/restaurant";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
})
export class RestaurantFormComponent implements OnInit {

  restaurant : Restaurant = new Restaurant();
  constructor(    private restaurantService : RestaurantService,
                  private router: Router,
                  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        this.restaurantService.getRestaurant(id).subscribe(data => this.restaurant = data);
      }
    });
  }

  save() {
    var result;
    if (this.restaurant.id){
      result = this.restaurantService.update(this.restaurant);
    } else {
      result = this.restaurantService.add(this.restaurant);
    }

    result.subscribe(data => this.router.navigate(['/restaurants']));
  }
}
