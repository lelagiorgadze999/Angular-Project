import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private userServ: UserService
  ) {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService
        .login(email as string, password as string)
        .subscribe((users) => {
          if (users.length > 0) {
            const user = users.find((user) => {
              return (
                user.email === this.loginForm.get('email')?.value &&
                user.password === this.loginForm.get('password')?.value
              );
            });
            if (user) {
              this.router.navigate(['/']);
              this.userServ.loggedUser = user;
            } else {
              alert('Invalid credentials');
            }
          }
        });
    }
  }
}
