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
}
