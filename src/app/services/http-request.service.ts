import { Injectable } from '@angular/core';
import { AppHttpClientService } from '../utils/app-http-client.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: AppHttpClientService) { }

  getAppConfig(url) {
    this.http.get(url).pipe(map(result => {

    }));
  }

  addUsersToFirebase(payload) {
    return this.http.post('https://krunalujwal-abba1.firebaseio.com/users.json', payload);
  }

  getUserDetails() {
    return this.http.get2('https://krunalujwal-abba1.firebaseio.com/users.json');
  }
}
