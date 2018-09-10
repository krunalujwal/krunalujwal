import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs-compat/Observable';

export interface RequestOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  withCredentials?: boolean;
  responseType?: 'json';
  observe?: 'body';
  body?: any;
}


@Injectable({
  providedIn: 'root'
})
export class AppHttpClientService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public get<T>(endUrl: string, options?: RequestOptions): Observable<any> {
    return this.http.get<T>(this.apiUrl + endUrl, options);
  }

  public put(url, data) {
    return this.http.put(url, data);
  }

  public post(url, data) {
    return this.http.put(url, data);
  }

  public get2(url) {
    return this.http.get(url);
  }

}
