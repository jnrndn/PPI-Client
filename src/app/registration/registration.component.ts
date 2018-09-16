import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatchError } from '../shared/shared';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.scss' ],
})
export class RegistrationComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MatchError();

}
