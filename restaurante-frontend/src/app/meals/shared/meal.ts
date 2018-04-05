export class Meal {
  id: number;
  name: string;
  restaurant_id: number;
  price: number;
  restaurant: {
    name: string
  }
}
