import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput;
  @ViewChild('amountInput', { static: true }) amountInput;

  constructor(private shoppingListService: ShoppingListService) {}
  addIngredient() {
    this.shoppingListService.addIngredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
  }

  deleteIngredient() {}
  clearInputs() {}
}
