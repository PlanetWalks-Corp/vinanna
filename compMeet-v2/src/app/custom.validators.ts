import { AbstractControl } from "@angular/forms";

export class CustomValidators{
    static matchPasswords(group: AbstractControl): { [key: string]: any } | null {
        const passwordControl = group.get('password');
        const confirmPasswordControl = group.get('confirmPassword');
      
        if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
          return null;
        } else {
          return { 'passwordMismatch': true };
        }
      }
}