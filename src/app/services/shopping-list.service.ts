import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [];
  startedEditing = new Subject<number>();

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient() {}
}
