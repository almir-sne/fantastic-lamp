import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantService {

  private url: string = "http://localhost:3000/restaurants";

  constructor(private http: Http) { }

  getRestaurants(search ?: String){
    return this.http.get(search ? this.url + "?search=" + search : this.url)
      .map(res => res.json());
  }

  getRestaurant(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  add(restaurant){
    return this.http.post(this.url, {'restaurant': restaurant})
      .map(res => res.json());
  }

  update(restaurant){
    return this.http.put(this.url + '/' + restaurant.id, {'restaurant': restaurant})
      .map(res => res.json());
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }
}

