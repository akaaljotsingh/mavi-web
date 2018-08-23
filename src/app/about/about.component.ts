import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  items: Array<any> = [];

  constructor() {
    this.items = [
      {name: 'Name--1'},
      {name: 'Name--2'},
      {name: 'Name--3'},
      {name: 'Name--4'},
      {name: 'Name--5'},
      {name: 'Name--6'},
    ]
  }

  ngOnInit() {
  }

}
