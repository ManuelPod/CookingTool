import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Bread', 4),
    new Ingredient('Tomatoes', 1),
    new Ingredient('Eggs', 12),
    new Ingredient('Potatoes', 1),
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.updateIngredients();
  }
  editIngredient(index, name, amount) {
    console.log(amount);
    this.ingredients[index] = new Ingredient(name, amount);
    console.log(this.ingredients);
    this.updateIngredients();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updateIngredients();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    console.log(this.ingredients);
    this.updateIngredients();
  }

  updateIngredients() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
