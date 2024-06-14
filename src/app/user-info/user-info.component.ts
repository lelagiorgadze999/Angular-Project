import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  constructor(public userServ: UserService, private router: Router) {}
  logOut() {
    this.userServ.loggedUser = null;
    this.router.navigate(['/login']);
  }
}
