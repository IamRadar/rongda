import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Number(localStorage.getItem('expired')) < Number(new Date().getSeconds().toString())
    console.log('1111111111 ' + Number(localStorage.getItem('expired')));
    console.log('2222222222 ' + new Date().getTime());
    if (localStorage.getItem('uid') !== null && localStorage.getItem('isteacher') === 'yes' &&
    Number(localStorage.getItem('expired')) > new Date().getTime()) {
      return true;
    } else {
      console.log('2222222222');
      this.router.navigate(['/regandlog']);
      return false;
    }
  }

}
