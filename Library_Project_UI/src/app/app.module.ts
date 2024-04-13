import { NgModule } from '@angular/core';
 import{MatIconModule}from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { UserComponent } from './user/user.component';
import { AddBookComponent } from './addbook/add-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';
import { HomeComponent } from './Home/home.component';
import { FormsModule } from '@angular/forms';
import { BooklistComponent } from './Booklist/booklist.component';
import { SelectionbookComponent } from './Message/selectionbook.component';
// import { Loginguard } from './login/loginguard';
// import { AuthService } from './login/auth.service';
import { UserprofileComponent } from './Userprofile/userprofile.component';
import { LogoutComponent } from './Logout/logout.component';
import { CommaBeforeISTPipe } from './Userprofile/comma-before-ist.pipe';
// import { BooktableComponent } from './Booktable/Booktable.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/Footer.component';
import { ClientComponent } from './client/client.component';
import { SignUpComponent } from './sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BooklistComponent,
    SelectionbookComponent,
    UserprofileComponent,
    LogoutComponent,
    CommaBeforeISTPipe,
    HeaderComponent,
      FooterComponent,
      ClientComponent,
      SignUpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

