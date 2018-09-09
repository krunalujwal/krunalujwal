import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-grid-tabs',
  templateUrl: './grid-tabs.component.html',
  styleUrls: ['./grid-tabs.component.scss']
})
export class GridTabsComponent implements OnInit {

  htmlCode = `
  <mat-tab-group>
    <mat-tab label="HTML">
      Content 1
    </mat-tab>
    <mat-tab label="TS">
      Content 2
    </mat-tab>
    <mat-tab label="CSS">
      Content 3
    </mat-tab>
  </mat-tab-group>
  `;

  componentCode = `
  import {Component} from '@angular/core';

  /**
   * @title Basic use of the tab group
   */
  @Component({
    selector: 'tab-group-basic-example',
    templateUrl: 'tab-group-basic-example.html',
    styleUrls: ['tab-group-basic-example.css'],
  })
  export class TabGroupBasicExample {}
  `;

  cssCode = `/** No CSS for this example */`;

  private dom: Document;
  constructor(@Inject(DOCUMENT) dom: Document,
    private messageService: MessageService) {
    this.dom = dom;
  }

  ngOnInit() {
  }

  copyCode(code) {
    const textarea = this.dom.createElement('textarea');
    if (code === 'HTML') {
      textarea.value = this.htmlCode;
    } else {
      textarea.value = this.cssCode;
    }
    this.dom.body.appendChild(textarea);
    textarea.select();
    this.dom.execCommand('copy');
    this.dom.body.removeChild(textarea);
    this.showTopCenter();
  }

  showTopCenter() {
    this.messageService.add({ severity: 'warn', summary: 'Copied Successfully'/* , detail: 'Copied Successfully' */ });
  }
}
