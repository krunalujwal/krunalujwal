import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'krunalujwal';
  users: any = [];
  imageUrl = 'https://images.pexels.com/photos/1038670/pexels-photo-1038670.jpeg';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(fetchedPosts => (this.users = fetchedPosts));
  }
}

