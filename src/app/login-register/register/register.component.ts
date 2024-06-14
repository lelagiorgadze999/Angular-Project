import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { passwordMatchValidator } from './validators';
import { IUserData } from '../interfaces/register-login.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  public registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$'
          ),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      [passwordMatchValidator()]
    ),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, passwordGroup, surname } = this.registerForm.value;

      const newUser: IUserData = {
        name: name!,
        email: email!,
        surname: surname!,
        password: passwordGroup?.password!,
      };

      this.authService.register(newUser).subscribe(
        (response) => {
          alert('Registration successful');
          this.router.navigate(['/login']);
        },
        (error) => {
          alert('Registration failed');
          console.error('Registration error', error);
        }
      );
    }
  }
}
