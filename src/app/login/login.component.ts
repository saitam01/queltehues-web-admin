import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService, AuthService ]
})
export class LoginComponent implements OnInit {

  constructor ( private router: Router,
                private loginService: LoginService,
                private authService: AuthService) { }

  onLogin() {
    let token = this.authService.getAuthorizationToken();
    console.log('token: ' + token);
    var response = this.loginService.authenticate(token);
    debugger;
    console.log(response);
    //this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }
}
