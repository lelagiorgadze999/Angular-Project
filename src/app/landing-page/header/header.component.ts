import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    public userServ: UserService,
    private router: Router,
    public cartServ: CartService
  ) {}
  public redirectToLogin() {
    if (this.userServ.loggedUser) {
      this.router.navigate(['/user-info']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
