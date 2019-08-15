import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
  <a class="navbar-brand" href="">{{pageTitle}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-item nav-link text-" [routerLink]="['/welcome']">Home</a></li>
      <li class="nav-item"><a class="nav-item nav-link text-link" [routerLink]="['/products']">Product List</a></li>
      <li class="nav-item"><a class="nav-item nav-link text-link" [routerLink]="['/register']">Register</a></li>
    </ul>
  </div>
</nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>`
})

export class AppComponent {
  // title = 'sample-app';
  pageTitle: String = 'Product Management';
  // isOnline: boolean = true;
}
