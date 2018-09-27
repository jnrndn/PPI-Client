import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: [ './authentication.component.scss' ],
})
export class AuthenticationComponent implements OnInit {

  username: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

  onLogin(formValue) {
  }
}
