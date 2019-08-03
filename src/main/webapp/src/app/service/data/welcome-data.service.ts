import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveHelloWorldData(){
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/helloworldbean');
  }

  retrieveHelloWorldDataWithPathVariable(name){
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/helloworld/pathvariable/${name}`);
  }
}
