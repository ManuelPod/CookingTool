import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Carbonara',
      'Very gooooood!',
      'https://www.aheadofthyme.com/wp-content/uploads/2021/01/spaghetti-carbonara.jpg',
      [new Ingredient('Oeufs', 3)],
      1
    ),
    new Recipe(
      'Burger',
      'Fat and juicy!',
      'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg',
      [
        new Ingredient('Boeuf', 3),
        new Ingredient('Laitue', 1),
        new Ingredient('Tomates', 2),
        new Ingredient('Brie', 1),
        new Ingredient('Pain burger', 4),
      ],
      2
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find((recipe: Recipe) => recipe.id === id);
  }
}
