import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerguardGuard implements CanActivate {

  cango: boolean;

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('1111111111 ' + Number(localStorage.getItem('expired')));
    console.log('2222222222 ' + new Date().getTime());
    if (localStorage.getItem('uid') !== null && localStorage.getItem('isteacher') === 'no' &&
    Number(localStorage.getItem('expired')) > new Date().getTime()) {
      return true;
    } else {
      this.router.navigate(['/regandlog']);
      return false;
    }
  }
}
