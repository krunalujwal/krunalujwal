import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from './../../services/http-request.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  imageUrl = 'https://images.pexels.com/photos/1038670/pexels-photo-1038670.jpeg';
  configUrl = 'assets/config.json';
  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    this.httpRequestService.getAppConfig(this.configUrl);
  }
}
