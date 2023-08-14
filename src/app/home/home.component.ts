import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedInUser: any;
  constructor(private router: Router) {}

  ngOnInit() {
    const loggedUserId = localStorage.getItem('loggedInUserId');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    this.loggedInUser = users.find(
      (user: any) => user.username === loggedUserId
    );
  }
  logout() {
    localStorage.removeItem('loggedInUserId');
    this.router.navigate(['/login']);
  }
}
