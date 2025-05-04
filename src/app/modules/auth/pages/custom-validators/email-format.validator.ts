import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export const emailFormatValidator = (emailParam:string): ValidatorFn => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return (formGroup: AbstractControl): {emailNotValid: boolean} | null =>{
        const email = formGroup.get(emailParam);

        if (!email?.value) return null;
        
        return emailRegex.test(email?.value) ? null: {emailNotValid: true}
    }
}