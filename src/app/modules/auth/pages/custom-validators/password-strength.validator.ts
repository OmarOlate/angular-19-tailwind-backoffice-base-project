import { AbstractControl, ValidationErrors } from '@angular/forms';
import { getPasswordStrength } from './get-password-strength.validator';

export function passwordStrengthValidator(minStrength: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const strength = getPasswordStrength(value);
    return strength >= minStrength ? null : { weakPassword: true };
  };
}
