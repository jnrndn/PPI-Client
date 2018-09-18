import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchError, passwordMatch, regexValidator } from '../helpers/shared';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.scss' ],
})
export class RegistrationComponent implements OnInit {

  passRegex = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{7,}';

  registrationGroup: FormGroup;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  matcher = new MatchError();

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    this.password = new FormControl('', [
      Validators.required,
      regexValidator(new RegExp(this.passRegex), { 'strength': true }),
    ]);

    this.confirmPassword = new FormControl('', [
      Validators.required,
      passwordMatch(this.password, { 'match': true }),
    ]);
  }
}
