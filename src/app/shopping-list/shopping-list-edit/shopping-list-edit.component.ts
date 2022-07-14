import { Component, ViewChild } from '@angular/core';

import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput;
  @ViewChild('amountInput', { static: true }) amountInput;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient(form: NgForm) {
    const value = form.value;
    this.shoppingListService.addIngredient(value.name, value.amount);
    console.log('Yo');
  }

  deleteIngredient() {}
  clearInputs() {}
}
