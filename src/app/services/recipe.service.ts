import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Carbonara',
      'Very gooooood!',
      'https://www.aheadofthyme.com/wp-content/uploads/2021/01/spaghetti-carbonara.jpg',
      [new Ingredient('Oeufs', 3)]
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
      ]
    ),
    new Recipe(
      'Eggs',
      'Eggs',
      'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
      [new Ingredient('Eggs', 4)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(
    imagePath: string,
    name: string,
    description: string,
    ingredients: Ingredient[],
    id: number
  ) {
    this.recipes.push(new Recipe(name, description, imagePath, ingredients));
    this.updateRecipes();
  }

  updateRecipe(index, recipe) {
    this.recipes[index] = new Recipe(
      recipe.name,
      recipe.description,
      recipe.imagePath,
      recipe.ingredients
    );
    this.updateRecipes();
  }
  updateRecipes() {
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index) {
    this.recipes.splice(index, 1);
    this.updateRecipes();
  }
}
