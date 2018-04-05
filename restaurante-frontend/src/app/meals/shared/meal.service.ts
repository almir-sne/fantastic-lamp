import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MealService {

  private url: string = "http://localhost:3000/meals";

  constructor(private http: Http) { }

  getMeals(search ?: String){
    return this.http.get(search ? this.url + "?search=" + search : this.url)
      .map(res => res.json());
  }

  getMeal(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  add(meal){
    return this.http.post(this.url, {'meal': meal})
      .map(res => res.json());
  }

  update(meal){
    return this.http.put(this.url + '/' + meal.id, {'meal': meal})
      .map(res => res.json());
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
