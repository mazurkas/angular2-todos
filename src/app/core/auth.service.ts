import { Injectable } from '@angular/core';

@Injectable()     //服务：注入
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string, password: string): boolean {
    if(username === 'wangpeng')
      return true;
    return false;
  }

}
