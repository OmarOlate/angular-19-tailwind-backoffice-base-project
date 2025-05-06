import { NgClass, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AlertComponent, ButtonComponent, IconComponent } from 'src/ui';
import { emailFormatValidator } from '../custom-validators';
import { AuthService } from '../data-access';
import { toSignal } from '@angular/core/rxjs-interop';
import { AccessTokenDto, UserDataDto } from '../dtos';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, ButtonComponent, NgClass, IconComponent, AlertComponent],
})
export class SignInComponent {
  readonly #httpService = inject(AuthService);
  hide = true;
  submitted = false;
  passwordTextType!: boolean;
  errorMessage: string = '';

  constructor(
    private readonly _router: Router,
    ) {}

  protected readonly $hasError = toSignal(this.#httpService.hasError$);
  protected readonly $isLoading = toSignal(this.#httpService.isLoading$);

  private fb = inject(FormBuilder);

  loginForm = this.fb.group(
    { 
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      
    },{
      validators: [
        emailFormatValidator('email'),
      ]
    }
  )

  get f() {
    return this.loginForm.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  loginUser() {
    console.log('loginUser llamado');

    this.submitted = true;
    const email = this.loginForm.get('email')!.value!;
    const password = this.loginForm.get('password')!.value!;
    
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }


    this.#httpService
      .login({ email, password })
      .pipe(
        tap(
          (result: {
            token: AccessTokenDto['token'];
            userData: UserDataDto;
          }) => {
            if (result.token && result.userData) {
              localStorage.setItem('token', result.token);
              localStorage.setItem('userData', JSON.stringify(result.userData));
              this._router.navigateByUrl('/dashboard/admin');
            }
          }
        ),
        catchError((error) => {
          console.error(`Ocurrió un error ${error}`);
          this.errorMessage = 'Error al iniciar sesión';
          return of(null);
        })
      )
      .subscribe();
  }
}
