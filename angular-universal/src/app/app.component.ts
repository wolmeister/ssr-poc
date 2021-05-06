import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type User = {
  name: string;
  avatarUrl: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public user: User | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User>('http://localhost:3000/api/users/me').subscribe(user => {
      this.user = user;
    });
  }
}
