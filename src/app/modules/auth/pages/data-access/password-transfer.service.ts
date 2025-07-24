import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PasswordTransferService {
  private readonly EMAIL_KEY = 'temp_email';
  private readonly PASSWORD_KEY = 'temp_password';

  setCredentials(email: string, currentPassword: string): void {
    sessionStorage.setItem(this.EMAIL_KEY, email);
    sessionStorage.setItem(this.PASSWORD_KEY, currentPassword);
  }

  get email(): string {
    return sessionStorage.getItem(this.EMAIL_KEY) ?? '';
  }

  get currentPassword(): string {
    return sessionStorage.getItem(this.PASSWORD_KEY) ?? '';
  }

  clear(): void {
    sessionStorage.removeItem(this.EMAIL_KEY);
    sessionStorage.removeItem(this.PASSWORD_KEY);
  }
}
