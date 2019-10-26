import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from './top-bar.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './component/modal/modal.component';
import { Storage, JWTOptions } from 'ngx-paris';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  menuList = Menu;
  loginUI = false;
  account = '';
  password = '';

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private loginService: LoginService,
    private storage: Storage,
    private option: JWTOptions
  ) { }

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

  goPersonal() {
    this.router.navigate([`pages/personalInformation`]);
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  login() {
    const obj = {
      account: this.account,
      password: this.password
    }

    if (this.account.length > 0 && this.password.length > 0) {
      this.loginService.login(obj).subscribe(resp => {
        this.storage.set(this.option.key, resp);
        this.loginUI = true;
      }, error => alert('帳號密碼錯誤'));
    } else {
      alert('帳號密碼不可以為空');
    }

  }

  logout() {
    this.loginUI = false;
    this.account = '';
    this.password = '';
    this.storage.clear();
    this.router.navigate([`pages/home`]);
  }
}
