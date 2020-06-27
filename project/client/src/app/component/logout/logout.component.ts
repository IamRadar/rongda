import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout().subscribe(params => {
      if (params === true) {
        /*sessionStorage.removeItem('islog');
        sessionStorage.removeItem('isteacher');
        sessionStorage.removeItem('uid');*/
        alert('注销成功!');
      } else {
        alert('注销失败!');
      }
    });
  }

  /*logout() {
    this.authService.logout();
  }*/

  ngOnInit() {
  }

}
