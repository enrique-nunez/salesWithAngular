import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainSidebarComponent } from './main/main-sidebar/main-sidebar.component';
import { ControlSidebarComponent } from './main/control-sidebar/control-sidebar.component';
import { HomeComponent } from './page/home/home.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './page/employee/employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { EmployeeAddComponent } from './page/employee/employee-add/employee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    ControlSidebarComponent,
    HomeComponent,
    ContactsComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
