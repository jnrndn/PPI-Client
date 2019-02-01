import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Ilogin } from '../interfaces/login.interface';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: [ './authentication.component.scss' ],
})
export class AuthenticationComponent implements OnInit {

  username: string;
  password: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(formValue: Ilogin) {
    console.log(formValue);
    this.authService.logIn(formValue);
  }
}
