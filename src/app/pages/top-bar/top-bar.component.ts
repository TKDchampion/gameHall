import { Component, OnInit } from '@angular/core';
import { Menu } from './top-bar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  menuList = Menu;

  constructor(private router: Router) { }

  ngOnInit() {
    this.filterPath();
  }

  filterPath() {
    this.menuList.forEach(i => {
      i.active = false;
      if (location.pathname === `/pages/${i.key}`) { i.active = true; }
    });
  }

  selectorMenu(menuItem) {
    this.menuList.forEach(i => i.active = false);
    menuItem.active = true;
    this.router.navigate([`pages/${menuItem.key}`]);
  }
}
