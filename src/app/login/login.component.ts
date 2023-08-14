// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  loginUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(
      (user: any) =>
        user.username === this.username && user.password === this.password
    );

    if (foundUser) {
      alert('Login successful!');
      localStorage.setItem('loggedInUserId', this.username);
      this.router.navigate(['/']);
    } else {
      alert('Invalid username or password.');
    }
  }
}
