import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    a.active {
      color: #fff !important;
    }
    .navbar-inverse {
      background-color: #222;
    }
    .navbar-inverse .navbar-nav>li>a{
      color: #ccc;
    }
    .navbar-inverse .navbar-nav>li>a:hover {
      color: #fff;
    }
    .navbar-inverse .navbar-brand {
      color: #ccc;
    }
    .navbar-inverse .navbar-brand:hover {
      color: #fff;
    }
  `],
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  message = 'This is the sample message.';
}
