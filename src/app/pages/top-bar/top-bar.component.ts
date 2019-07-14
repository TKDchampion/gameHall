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
  }

  selectorMenu(menuItem) {
    this.menuList.forEach(i => i.active = false);
    menuItem.active = true;
    this.router.navigate([`pages/${menuItem.key}`]);
  }
}
