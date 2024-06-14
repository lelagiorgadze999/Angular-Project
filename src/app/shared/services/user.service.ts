import { Injectable } from '@angular/core';
import { IUserData } from '../../login-register/interfaces/register-login.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public loggedUser: IUserData | null = null;
  constructor() {}
}
