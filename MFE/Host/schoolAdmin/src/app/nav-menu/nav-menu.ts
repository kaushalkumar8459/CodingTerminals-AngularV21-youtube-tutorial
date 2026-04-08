import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterModule],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.scss',
})
export class NavMenu {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
