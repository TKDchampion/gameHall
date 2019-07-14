import { Component, OnInit } from '@angular/core';
import { Menu } from './top-bar.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  menuList = Menu;

  constructor() { }

  ngOnInit() {
  }

  selectorMenu(menuItem) {
    this.menuList.forEach(i => i.active = false);
    menuItem.active = true;
  }
}
