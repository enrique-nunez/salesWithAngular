import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { HomeComponent } from './page/home/home.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  { path: '', component : MainComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
