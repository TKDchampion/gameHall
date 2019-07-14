import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sideDate: any;

  constructor() { }

  ngOnInit() {
    this.sideDate = [
      {
        id: 1, src: 'https://www.kia168.com/images/banner03.jpg'
      },
      {
        id: 2, src: 'https://www.ts775.com.tw/upload/ad20150430154817-0.jpg'
      },
      {
        id: 3, src: 'https://ju777.com.tw/userfiles/images/20151125064357921.jpg'
      },
    ];
  }

}
