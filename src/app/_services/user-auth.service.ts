import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []){
    localStorage.setItem('roles', JSON.stringify(roles));
  }
  public getRoles(): []{
    return JSON.parse(localStorage.getItem('roles'));
  }
  public setToken(jwtToken: string){
    localStorage.setItem('jwtToken', jwtToken);
  }
  public getToken(): string{
    return localStorage.getItem('jwtToken');
  }
  public setUser(user: string){
    localStorage.setItem('login', user);
  }
  public getUser(): string{
    return localStorage.getItem('login');
  }
  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getToken() && this.getRoles();
  }
}
