import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ConfigurationComponent } from './configuration/configuration.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
// import { loginAuthGuard } from './auth-gaurd.service';
import { AuthGaurdService, loginAuthGuard,adminAlreadyLogin} from './auth-gaurd.service';
import { UsertablesComponent } from './usertables/usertables.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clients', component: ClientsComponent,canActivate:[loginAuthGuard] },
  { path: 'login', component: LoginComponent,canActivate:[adminAlreadyLogin] },
  { path: 'configurations', component: ConfigurationComponent,canActivate:[loginAuthGuard] },
  { path: 'users', component: UserComponent,canActivate:[loginAuthGuard] },
  { path: 'logout',component: LogoutComponent },
  { path: 'userData',component: UsertablesComponent,canActivate:[loginAuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
