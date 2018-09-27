import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: [ './recover.component.scss' ],
})
export class RecoverComponent implements OnInit {

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
