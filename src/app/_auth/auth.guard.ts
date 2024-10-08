import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserAuthService} from "../_services/user-auth.service";
import {UserService} from "../_services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService,
              private router: Router,
              private userService: UserService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.userAuthService.getToken() !== null){
      const role = route.data.role;
      if (role === 'ADMIN' && this.userService.isAdmin()){
        return true;
    }else if (role === 'USER' && this.userService.isUser()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
  }

}
