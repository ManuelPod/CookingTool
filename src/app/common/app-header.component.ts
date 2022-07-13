import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Output() section = new EventEmitter<string>();
  toRecipes() {
    this.section.emit('recipes');
  }
  toShoppingList() {
    this.section.emit('shopping');
  }
}
