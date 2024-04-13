import { ClientComponent } from './client/client.component';
// import { routeGuard } from './login/auth.service';
import { CanActivateChildFn } from '@angular/router';
// import { authGuard } from './user/auth.guard';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './addbook/add-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';
import { HomeComponent } from './Home/home.component';
import { BooklistComponent } from './Booklist/booklist.component';
import { SelectionbookComponent } from './Message/selectionbook.component';
// import { Loginguard } from './login/loginguard';
import { UserprofileComponent } from './Userprofile/userprofile.component';
import { LogoutComponent } from './Logout/logout.component';
// import { Loginguard } from './login/loginguard';
import { AuthGuard, routeGuard } from './authguard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { Authguard } from './user/authguard';
const routes: Routes = [{
  path:'',component:HomeComponent},
{path:'log',canActivate:[routeGuard],component:LoginComponent},
{path:'cr',canActivate:[routeGuard],component:ClientComponent},
{path:'ur',canActivate:[routeGuard],component:SignUpComponent},
{path:'reg',canActivate:[routeGuard],component:RegisterComponent},
{path:'book',canActivate:[AuthGuard],component:BooklistComponent},
{path:'selectionbook',canActivate:[AuthGuard],component:SelectionbookComponent},
{path:'logout',canActivate:[AuthGuard],component:LogoutComponent},
{path:'profile',canActivate:[AuthGuard],component:UserprofileComponent},
{path:'addbook',canActivate:[AuthGuard],component:AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
