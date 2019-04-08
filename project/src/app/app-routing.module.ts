import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { RegandlogComponent } from './regandlog/regandlog.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivitypersonComponent } from './activityperson/activityperson.component';
import { ConnectComponent } from './connect/connect.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HostComponent } from './host/host.component';
import { ManageractivityComponent } from './manageractivity/manageractivity.component';
import { ManagerapplyComponent } from './managerapply/managerapply.component';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { ManagerpersonComponent } from './managerperson/managerperson.component';
import { ModifyComponent } from './modify/modify.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { MyhostComponent } from './myhost/myhost.component';
import { ReleaseComponent } from './release/release.component';
import { ShowComponent } from './show/show.component';
import { TakepartComponent } from './takepart/takepart.component';

const routes: Routes = [
  {path: 'regandlog', component: RegandlogComponent},
  {path: 'user/homepage', component: HomepageComponent},
  {path: 'user/show/:nid', component: ShowComponent},
  {path: 'user/activity', component: ActivityComponent},
  {path: 'user/takepart/:aid', component: TakepartComponent},
  {path: 'user/host', component: HostComponent},
  {path: 'user/connect', component: ConnectComponent},
  {path: 'user/myhome', component: MyhomeComponent},
  {path: 'user/myhome/myhost', component: MyhostComponent},
  {path: 'user/myhome/modify', component: ModifyComponent},
  {path: 'manager/managerhome', component: ManagerhomeComponent},
  {path: 'manager/managerhome/managerperson/:pid', component: ManagerpersonComponent},
  {path: 'manager/manageractivity', component: ManageractivityComponent},
  {path: 'manager/manageractivity/activityperson/:aid', component: ActivitypersonComponent},
  {path: 'manager/managerapply', component: ManagerapplyComponent},
  {path: 'manager/release', component: ReleaseComponent},
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
