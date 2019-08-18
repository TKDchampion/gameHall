import { Component, OnInit } from '@angular/core';
import { Menu } from './top-bar.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './component/modal/modal.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  menuList = Menu;
  loginUI = false;

  constructor(private router: Router, private modalService: NgbModal) { }

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

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  login() {
    this.loginUI = true;
  }

  logout() {
    this.loginUI = false;
  }
}
