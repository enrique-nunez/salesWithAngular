import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { EmployeeAddComponent } from './page/employee/employee-add/employee-add.component';
import { EmployeeListComponent } from './page/employee/employee-list/employee-list.component';
import { HomeComponent } from './page/home/home.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  { path: '', component : MainComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'employee/list', component: EmployeeListComponent},
      {path: 'employee/add', component: EmployeeAddComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
