import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  htmlText = `<div>
  <span>
    <h2>Krunal</h2>
    <p>Sakharkar</p>
  </span>
</div>`;
  constructor() { }

  ngOnInit() {
  }

}
