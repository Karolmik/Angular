import { Injectable } from '@angular/core';
import { User } from '../user';
@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  userName: string = '';
  token: string = '';
  constructor() {}
  getData(data: User) {
    this.userName = data.userName;
    this.token = data.userEmail;
  }
  sendData() {
    return this.userName;
  }
}
