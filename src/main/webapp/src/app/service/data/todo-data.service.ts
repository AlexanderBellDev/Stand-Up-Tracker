import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Standup} from '../../standups/standups.component';
import {API_URL} from '../../app.constants';


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
    return this.http.get<Standup[]>(`${API_URL}/users/${username}/standup`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/standup/${id}`);
  }

  retrieveStandUp(username, id) {
    return this.http.get<Standup>(`${API_URL}/users/${username}/standup/${id}`);
  }

  updateStandUp(username, id, standUp) {
    return this.http.put(`${API_URL}/users/${username}/standup/${id}`, standUp);
  }

  createStandUp(username, standUp) {
    return this.http.post(`${API_URL}/users/${username}/standup`, standUp);
  }
}
