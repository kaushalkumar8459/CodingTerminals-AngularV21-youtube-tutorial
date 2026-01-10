import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';

  imageName = signal('stone');
  avatarUrl = signal('https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg');


  count = signal(1);

  // with signal
  doubleCount = signal(this.count());

  // with computed
  // doubleCount = computed(() => this.count() * 2);

  increase() {
    this.count.update(value => value + 1);
  }
}

