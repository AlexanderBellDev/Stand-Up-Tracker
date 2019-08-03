import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }

  static getAuthenticatedUser() {
    return sessionStorage.getItem('authenticateUser');
  }

  static isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  static logout() {
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }

  executeAuthenticationService(username, password) {


    // @ts-ignore
    return this.http.post<any>(
      `${API_URL}/authenticate`, {
        username,
        password
      }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticateUser', username);
          sessionStorage.setItem('token', `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  getAuthenticatedToken() {
    if (BasicAuthenticationService.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
