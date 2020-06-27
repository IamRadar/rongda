import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { RegandlogComponent } from './component/regandlog/regandlog.component';
import { ActivityComponent } from './component/activity/activity.component';
import { ActivitypersonComponent } from './component/activityperson/activityperson.component';
import { ConnectComponent } from './component/connect/connect.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { HostComponent } from './component/host/host.component';
import { ManageractivityComponent } from './component/manageractivity/manageractivity.component';
import { ManagerapplyComponent } from './component/managerapply/managerapply.component';
import { ManagerhomeComponent } from './component/managerhome/managerhome.component';
import { ManagerpersonComponent } from './component/managerperson/managerperson.component';
import { ModifyComponent } from './component/modify/modify.component';
import { MyhomeComponent } from './component/myhome/myhome.component';
import { MyhostComponent } from './component/myhost/myhost.component';
import { ReleaseComponent } from './component/release/release.component';
import { ShowComponent } from './component/show/show.component';
import { TakepartComponent } from './component/takepart/takepart.component';
import { AuthGuard } from './auth/auth.guard';
import { ManagerguardGuard } from './auth/managerguard.guard';
import { ManagersiteComponent } from './component/managersite/managersite.component';
import { MyapplyComponent } from './component/myapply/myapply.component';

const routes: Routes = [
  {path: 'regandlog', component: RegandlogComponent },
  {path: 'user/homepage', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'user/show/:nid', component: ShowComponent, canActivate: [AuthGuard]},
  {path: 'user/activity', component: ActivityComponent, canActivate: [AuthGuard]},
  {path: 'user/takepart/:aid', component: TakepartComponent, canActivate: [AuthGuard]},
  {path: 'user/host', component: HostComponent, canActivate: [AuthGuard]},
  {path: 'user/connect', component: ConnectComponent, canActivate: [AuthGuard]},
  {path: 'user/myhome', component: MyhomeComponent, canActivate: [AuthGuard]},
  {path: 'user/myhome/myhost', component: MyhostComponent, canActivate: [AuthGuard]},
  {path: 'user/myhome/modify', component: ModifyComponent, canActivate: [AuthGuard]},
  {path: 'user/myhome/myapply', component: MyapplyComponent, canActivate: [AuthGuard]},
  {path: 'manager/managerhome', component: ManagerhomeComponent, canActivate: []},
  {path: 'manager/managerhome/managerperson/:uid', component: ManagerpersonComponent, canActivate: []},
  {path: 'manager/manageractivity', component: ManageractivityComponent, canActivate: [ManagerguardGuard]},
  {path: 'manager/manageractivity/activityperson/:aid', component: ActivitypersonComponent, canActivate: [ManagerguardGuard]},
  {path: 'manager/managerapply', component: ManagerapplyComponent, canActivate: [ManagerguardGuard]},
  {path: 'manager/release', component: ReleaseComponent, canActivate: [ManagerguardGuard]},
  {path: 'manager/managersite', component: ManagersiteComponent, canActivate: [ManagerguardGuard]},
  {path: '', redirectTo: 'regandlog', pathMatch: 'full'},
  {path: 'user', redirectTo: 'user/homepage', pathMatch: 'full'},
  {path: 'manager', redirectTo: 'manager/managerhome', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
