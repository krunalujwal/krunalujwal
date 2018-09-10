import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from './../../../services/http-request.service';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private httpRequest: HttpRequestService) {

  }

  ngOnInit() {

  }

  onSubmit() {
    this.httpRequest.addUsersToFirebase(this.userData).subscribe(
      (result) => {
        console.log('Add Users', result);
        this.userData = {
          name: '',
          email: '',
          password: ''
        };
      }
    );
  }

  checkLogin() {
    this.httpRequest.getUserDetails().subscribe(
      (result) => {
        if (result['email'] === this.userData.email && result['password'] === this.userData.password) {
          console.log('Logged In Successfully..!!');
        } else {
          console.log('Login Failed..!!');
        }
        this.userData = {
          name: '',
          email: '',
          password: ''
        };
      }
    );
  }

}
