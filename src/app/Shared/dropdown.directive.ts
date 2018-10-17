import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
// class created to display dropdown on the menu bar when clicked
export class DropdownDirective{
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen(){
  this.isOpen = !this.isOpen;
  }
}