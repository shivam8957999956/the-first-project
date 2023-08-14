import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router) {}
  registerUser() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
    this.router.navigate(['/login']);
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
