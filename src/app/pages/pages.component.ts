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
        id: 1, src: "https://www.kia168.com/images/banner03.jpg"
      },
      {
        id: 2, src: "https://www.ts775.com.tw/upload/ad20150430154817-0.jpg"
      },
      {
        id: 3, src: "https://ju777.com.tw/userfiles/images/20151125064357921.jpg"
      },
    ]
  }
}
