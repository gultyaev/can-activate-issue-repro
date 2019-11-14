import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-guard';

  constructor(private readonly router: Router) {}

  nav() {
    this.router.createUrlTree(['/login'], {
      skipLocationChange: true
    });
  }
}
