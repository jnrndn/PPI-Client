import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Ilogin } from '../interfaces/login.interface';
import { IRegister } from '../interfaces/register.interface';

enum Endpoints {
  login = 'api/auth/login',
  register = 'api/auth/register',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(userToLogion: Ilogin) {
    const url = `${environment.domain}/${Endpoints.login}`;
    console.log(url, userToLogion);

    this.http.post<Ilogin>(url, userToLogion)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of('err');
        }),
      )
      .subscribe((res) => console.log(res));
  }

  register(userToRegister: IRegister) {
    const url = `${environment.domain}/${Endpoints.register}`;
    this.http.post(url, userToRegister);
  }
}
