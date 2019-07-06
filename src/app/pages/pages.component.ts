import { Component, OnInit } from '@angular/core';
import { isMobile } from '../models/config';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  isMobile = isMobile(); //todo
  sideDate: any;

  constructor() { 
  }

  ngOnInit() {
    this.sideDate = [
      {
        id: 1, src: "https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg"
      },
      {
        id: 2, src: "https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg"
      },
      {
        id: 3, src: "https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg"
      },
    ]
  }
}
