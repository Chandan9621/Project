import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UserComponent } from './user/user.component';
import { UsertablesComponent } from './usertables/usertables.component';
// import { NgxDropdownListModule } from 'ngx-dropdown-list';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    ConfigurationComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ConfigurationComponent,
    UserComponent,
    UsertablesComponent,
    // NgxDropdownListModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgMultiSelectDropDownModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
