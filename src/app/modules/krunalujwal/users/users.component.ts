import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from './../../../core/pipes/filter.pipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;
  searchKey: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(fetchedPosts => (this.users = fetchedPosts));
  }

}
