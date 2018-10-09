import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot-pass.component.html',
  styleUrls: [ './forgot-pass.component.scss' ],
})
export class ForgotPassComponent implements OnInit {

  email: FormControl;
  constructor() { }

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  goBack(event) {
    event.stopPropagation();
    window.history.back();
  }

}
