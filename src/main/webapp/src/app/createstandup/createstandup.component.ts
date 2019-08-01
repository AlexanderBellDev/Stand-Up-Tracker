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
  username: string;

  constructor(
    private standupService: TodoDataService,
    private route: ActivatedRoute,
    private routes: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.username =  sessionStorage.getItem('authenticateUser');
    console.log(this.username);
    if (this.id !== -1) {
    this.standupService.retrieveStandUp(this.username, this.id).subscribe(
      data => this.standUp = data
    );
  }
  }

  saveStandUp() {
    const user =  sessionStorage.getItem('authenticateUser');
    console.log(this.standUp.yesterday);
    // tslint:disable-next-line:triple-equals
    if (this.id == -1) {
      console.log('user is ' + this.username );
      this.standupService.createStandUp(this.username, this.standUp).subscribe(
        data => {
          console.log(data);
          this.routes.navigate(['standups']);
        }
      );
    } else {
      this.standupService.updateStandUp(user, this.id, this.standUp).subscribe(
        data => {
          console.log(data);
          this.routes.navigate(['standups']);
        }
      );
    }
  }
}
