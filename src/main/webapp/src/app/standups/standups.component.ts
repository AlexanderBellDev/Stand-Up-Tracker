import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Standup {
  constructor(
    public id: number,
    public yesterday: string,
    public today: string,
    public blockers: string,
    public done: boolean,
    public date: Date
  ) {
  }
}


@Component({
  selector: 'app-standups',
  templateUrl: './standups.component.html',
  styleUrls: ['./standups.component.css']
})
export class StandupsComponent implements OnInit {
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }
  standups: Standup[];

  message: string;

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Alex').subscribe(
      response => {
        console.log(response);
        this.standups = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('aspolale', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete Successful ${id}`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['createstandup', id]);
  }


}
