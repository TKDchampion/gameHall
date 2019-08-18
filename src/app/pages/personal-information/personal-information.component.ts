import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  menuList = [];

  constructor() {
    this.menuList = [
      { name: '個人訊息', active: true },
      { name: '存款資訊', active: false },
      { name: '轉帳資訊', active: false },
      { name: '歷史遊戲', active: false },
      { name: '代理資訊', active: false },
    ];
  }

  ngOnInit() {
  }

  selectedBtn(item) {
    this.menuList.forEach(i => i.active = false);
    item.active = true;
  }

}
