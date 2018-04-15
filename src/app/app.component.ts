import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  // TODO: actual login checking
  showNavbar() {
    return this.router.url !== '/login';
  }

  showFilters() {
    return ['/records', '/analytics'].includes(this.router.url);
  }
}
