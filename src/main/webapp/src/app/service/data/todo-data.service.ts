import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Standup} from '../../standups/standups.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username) {
    return this.http.get<Standup[]>(`http://localhost:8080/users/${username}/standup`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/standup/${id}`);
  }

  retrieveStandUp(username, id) {
    return this.http.get<Standup>(`http://localhost:8080/users/${username}/standup/${id}`);
  }

  updateStandUp(username, id, standUp) {
    return this.http.put(`http://localhost:8080/users/${username}/standup/${id}`, standUp);
  }
}
