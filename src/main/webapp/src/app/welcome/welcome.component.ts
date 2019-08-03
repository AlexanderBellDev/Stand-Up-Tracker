import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessageFromService: string;
  customizedWelcomeMessage: string;
  name = '';
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService, private router: Router) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  getWelcomeMessage() {
    this.welcomeDataService.retrieveHelloWorldData().subscribe(response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error));

  }
  handleSuccessfulResponse(response) {
    this.customizedWelcomeMessage = response.message;
  }

  handleErrorResponse(error) {
    this.customizedWelcomeMessage = error.error.message;
  }

  getWelcomeMessageWithParameter() {
    // tslint:disable-next-line:max-line-length
    this.welcomeDataService.retrieveHelloWorldDataWithPathVariable('Alex').subscribe(response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error));
  }
  addStandUp() {
    this.router.navigate(['createstandup', -1]);
  }

}
