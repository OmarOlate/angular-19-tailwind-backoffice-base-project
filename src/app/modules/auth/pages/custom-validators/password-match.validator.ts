import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator = (firstControlParam:string, secondControlParam: string): ValidatorFn => {
    return (formGroup: AbstractControl): {controlNotMatch: boolean} | null => {

    const firstControl = formGroup.get(firstControlParam);
    const secondControl = formGroup.get(secondControlParam);

    if(!firstControl?.value || !secondControl?.value) return null;

    return firstControl?.value === secondControl?.value ? null : {controlNotMatch: true}
    } 
} 