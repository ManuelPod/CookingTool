import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  @Output() section = new Subject<string>();

  constructor(private router: Router) {}
}
