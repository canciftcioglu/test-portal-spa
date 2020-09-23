import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginUser);
  }

  logOut(){
    this.authService.logOut();
  }

  get isAuthenticated(){
    return this.authService.loggedIn();
  }

}
