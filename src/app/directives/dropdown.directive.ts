import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') mouseClick() {
    this.isOpen = !this.isOpen;
  }
}
