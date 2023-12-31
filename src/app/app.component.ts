import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'The First Project';
  loggedInUser: any;
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('loggedInUserId');
    this.router.navigate(['/login']);
  }
}
