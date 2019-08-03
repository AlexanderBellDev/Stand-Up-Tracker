import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BasicAuthenticationService} from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private  basicAuthenticationService: BasicAuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const username = 'aspolale';
    // const password = 'password';
    const basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    const username = BasicAuthenticationService.getAuthenticatedUser();
    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
