import { Injectable } from '@angular/core';
import { BaseService, HttpDefaultOptions } from 'ngx-paris';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  constructor(http: HttpClient, options: HttpDefaultOptions) {
    super(http, options);
  }

  login(obj: object) {
    return this.post('Account/Login', {
      body: obj,
    });
  }
}
