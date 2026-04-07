import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  imports: [],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.scss',
})
export class NavMenu {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
