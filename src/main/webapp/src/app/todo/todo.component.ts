import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Standup} from '../standups/standups.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  standUp: Standup;

  constructor(
    private standupService: TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    const user =  sessionStorage.getItem('authenticateUser');
    this.standupService.retrieveStandUp(user, this.id).subscribe(

    data => this.standUp = data
    );
  }

}
