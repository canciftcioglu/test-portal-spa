import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper, tokenNotExpired } from '../../../node_modules/angular2-jwt';
import { User } from '../models/user';

@Injectable()
export class AuthService {

  path = "https://localhost:44348/api/auth";
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
  TOKEN_KEY = "token";



  constructor(private httpClient: HttpClient, private router: Router) { }

  login(loginUser: User) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json")
    this.httpClient.post(this.path + "/login", loginUser, { headers: headers })
      .subscribe(data => {
        this.saveToken(data['token'])
        this.userToken = data['token']
        this.decodedToken = this.jwtHelper.decodeToken(data['token'].toString())
        console.log("Giriş yapıldı")
        this.router.navigateByUrl('/anasayfa')
      },
      error=>{
        alert("Ooopss! " + error['error'])
      });

  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY);
  }

  loggedIn(){
    return tokenNotExpired(this.TOKEN_KEY);
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentuserId(){
    
    return this.jwtHelper.decodeToken(this.token).nameid;
  }


  

}
