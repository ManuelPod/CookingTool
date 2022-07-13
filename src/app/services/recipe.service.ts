import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Carbonara',
      'Very gooooood!',
      'https://www.aheadofthyme.com/wp-content/uploads/2021/01/spaghetti-carbonara.jpg',
      [new Ingredient('Oeufs', 3)]
    ),
    new Recipe(
      'Carbonara',
      'Very gooooood!',
      'https://www.aheadofthyme.com/wp-content/uploads/2021/01/spaghetti-carbonara.jpg',
      [new Ingredient('Oeufs', 3)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
