import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  form: FormGroup;
  ingredientInputs: FormControl[];
  id: number;
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}
  editRecipe() {
    const recipe = this.form.value;
    this.recipeService.updateRecipe(this.id, recipe);

    this.navigateBack(this.id);
  }
  addRecipe() {
    const recipe = this.form.value;
    const id = this.recipeService.getRecipes().length;
    this.recipeService.addRecipe(
      recipe.imagePath,
      recipe.name,
      recipe.description,
      recipe.ingredients,
      id
    );
    this.navigateBack(id);
  }
  navigateBack(id) {
    this.router.navigate(['/recipes', id]);
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.form = new FormGroup({
      imagePath: new FormControl(recipeImagePath, Validators.required),
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  addIngredientInput() {
    (<FormArray>this.form.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  removeIngredientInput(index) {
    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }
  getControls() {
    return (<FormArray>this.form.get('ingredients')).controls;
  }
}
