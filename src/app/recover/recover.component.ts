import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: [ './recover.component.scss' ],
})
export class RecoverComponent implements OnInit {
  passRegex: string =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{7,}';
  recoverForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.recoverForm = this.fb.group({
      password: [ null, [
        Validators.required,
        Validators.pattern(this.passRegex),
        Validators.minLength(8),
      ] ],
      confirmPassword: [ null, [
        Validators.required,
        Validators.minLength(8),
      ] ],
    },
      { validator: this.passwordMatchValidator },
    );
  }

  get password() {
    return this.recoverForm.get('password');
  }

  get confirmPassword() {
    return this.recoverForm.get('confirmPassword');
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password').value === form.get('confirmPassword').value ? null : { 'mismatch': true };
  }

  onRecover() {
    console.log(this.recoverForm);
  }
}
