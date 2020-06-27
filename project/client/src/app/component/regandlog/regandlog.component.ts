import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { Login } from 'src/app/entity/login';

@Component({
  selector: 'app-regandlog',
  templateUrl: './regandlog.component.html',
  styleUrls: ['./regandlog.component.css']
})
export class RegandlogComponent implements OnInit {

  islog = 1;
  isteacher = 'true';

  private currentUid;

  changetolog() {
     this.islog = 1;
  }

  changetoreg() {
    this.islog = 0;
  }

  /*private model = {
    uid: '',
    pwd: '',
    isteacher: ''
  };*/

  login(uid: string , pwd: string , istn: string) {
    let ist: boolean;
    if (istn === 'true') {
      ist = true;
    } else {
      ist = false;
    }
    console.log('out ist is ' + ist);
    this.authService.login(uid, pwd, ist).subscribe(params => {
      console.log('in ist is ' + ist);
      console.log('params is ' + params.content);
      if (params.content === '0') {
        alert('用户不存在！');
      } else if (params.content === '1') {
        alert('密码错误！');
      } else if (params.length > 1 && ist) {
        localStorage.setItem('isteacher', 'yes');
        localStorage.setItem('uid', uid);
        localStorage.setItem('token', JSON.parse(JSON.stringify(params.content)));
        localStorage.setItem('expired', (new Date().getTime() + 1000 * 3600 * 2).toString());
        console.log('json parse is ' + JSON.parse(JSON.stringify(params.content)));
        this.router.navigateByUrl('/user/homepage');
        alert('登陆成功！');
      } else if (params.length > 1 && !ist) {
        localStorage.setItem('isteacher', 'no');
        localStorage.setItem('uid', uid);
        localStorage.setItem('token', JSON.parse(JSON.stringify(params.content)));
        localStorage.setItem('expired', (new Date().getTime() + 1000 * 3600 * 2).toString());
        alert('登陆成功！');
        this.router.navigateByUrl('/manager/managerhome');
      }
    });
  }

  logout() {
    this.authService.logout().subscribe(params => {
      if (params) {
        localStorage.removeItem('uid');
        localStorage.removeItem('token');
        localStorage.removeItem('isteacher');
        alert('注销成功!');
      }
    });
  }

  /*login() {
    if (this.isteacher) {
      this.model.isteacher = 'true';
    } else {
      this.model.isteacher = 'false';
    }
    this.authService.login(this.model).subscribe(
      data => {
        console.log('111111111111');
        // console.log('data is ' + data);
        // localStorage.setItem('token', data.toString());
        localStorage.setItem('token', JSON.parse(data.toString())._body);
        console.log('22222222222');
        this.authService.sendToken(localStorage.getItem('token')).subscribe(
          params => {
            localStorage.setItem('currentUid', this.model.uid);
          }, error => {
            console.log(error);
          }
        );
      }
    );
  }*/

  register(uid: string , pwd: string , card: string , sure: string) {
    if (uid.length !== 10) {
      alert('该工号长度不合法!');
    } else if (!this.legal(uid)) {
      alert('工号应全部为数字!');
    } else if (!this.legal(card) || card.length !== 18) {
      alert('请输入合法的身份证信息!');
    } else if (pwd.length < 7 || pwd.length > 16) {
      alert('密码长度不合法!');
    } else if (pwd !== sure) {
      alert('两次输入的密码不一致!');
    } else {
      console.log('uid is ' + uid + ' pwd is ' + pwd + ' card is ' + card);
      this.authService.register(uid, pwd, card).subscribe(params => {
        console.log('params is ' + params);
        if (params === 0) {
          alert('该工号不存在!');
        } else if (params === 1) {
          alert('工号与身份证不对应!');
        } else if (params === 2) {
          alert('该用户已经注册,请勿重复注册!');
        } else {
          alert('注册成功!请使用账号登录!');
        }
      });
    }
  }

  legal(str: string) {
    let num = 0;
    for (const cha of str) {
      if (cha >= '0' && cha <= '9') {
        num++;
      }
    }
    if (num === str.length) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

}
