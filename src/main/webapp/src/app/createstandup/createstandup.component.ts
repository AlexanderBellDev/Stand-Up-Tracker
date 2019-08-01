import { Component, OnInit } from '@angular/core';
import {Standup} from '../standups/standups.component';
import {TodoDataService} from '../service/data/todo-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-createstandup',
  templateUrl: './createstandup.component.html',
  styleUrls: ['./createstandup.component.css']
})
export class CreatestandupComponent implements OnInit {
  id: number;
  standUp: Standup;

  constructor(
    private standupService: TodoDataService,
    private route: ActivatedRoute,
    private routes: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    const user =  sessionStorage.getItem('authenticateUser');
    this.standupService.retrieveStandUp(user, this.id).subscribe(

      data => this.standUp = data
    );
  }

  saveStandUp() {
    const user =  sessionStorage.getItem('authenticateUser');
    console.log(this.standUp.yesterday);
    this.standupService.updateStandUp(user, this.id, this.standUp).subscribe(
      data => {
        console.log(data);
        this.routes.navigate(['standups']);
      }
    );
  }
}
