import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: false }) form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIndex: number;
  editedIngredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedIngredient = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
        });
      }
    );
  }
  addIngredient(form: NgForm) {
    this.shoppingListService.addIngredient(form.value.name, form.value.amount);
    form.reset();
  }

  editIngredient(form: NgForm) {
    this.shoppingListService.editIngredient(
      this.editedIndex,
      form.value.name,
      form.value.amount
    );
    this.clearInputs();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editedIndex);
    this.clearInputs();
  }
  clearInputs() {
    this.form.reset();
    this.editMode = false;
  }
}
