import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Standup} from '../../standups/standups.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }
  static createBasicAuthenticationHttpHeader() {
    const username = 'user';
    const password = 'password';
    return 'Basic ' + window.btoa(username + ':' + password);
  }
  retrieveAllTodos(username) {
    const basicAuthHeaderString = TodoDataService.createBasicAuthenticationHttpHeader();
    const headers = new HttpHeaders(
      {Authorization: basicAuthHeaderString}
    );
    return this.http.get<Standup[]>(`http://localhost:8080/users/${username}/standup`, {headers});
  }

  deleteTodo(username, id) {
    const basicAuthHeaderString = TodoDataService.createBasicAuthenticationHttpHeader();
    const headers = new HttpHeaders(
      {Authorization: basicAuthHeaderString}
    );
    return this.http.delete(`http://localhost:8080/users/${username}/standup/${id}`, {headers});
  }

  retrieveStandUp(username, id) {
    const basicAuthHeaderString = TodoDataService.createBasicAuthenticationHttpHeader();
    const headers = new HttpHeaders(
      {Authorization: basicAuthHeaderString}
    );
    return this.http.get<Standup>(`http://localhost:8080/users/${username}/standup/${id}`, {headers});
  }

  updateStandUp(username, id, standUp) {
    const basicAuthHeaderString = TodoDataService.createBasicAuthenticationHttpHeader();
    const headers = new HttpHeaders(
      {Authorization: basicAuthHeaderString}
    );
    return this.http.put(`http://localhost:8080/users/${username}/standup/${id}`, standUp, {headers});
  }

  createStandUp(username, standUp) {
    const basicAuthHeaderString = TodoDataService.createBasicAuthenticationHttpHeader();
    const headers = new HttpHeaders(
      {Authorization: basicAuthHeaderString}
    );
    return this.http.post(`http://localhost:8080/users/${username}/standup`, standUp, {headers});
  }
}
