import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentSection: string = 'recipes';
  changeSection(value: string) {
    this.currentSection = value;
  }
}
