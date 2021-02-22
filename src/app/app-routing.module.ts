import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ListComponent } from './views/list/list.component';
import { Page404Component } from './views/page404/page404.component';


const routes: Routes = [
  
  {
    path:'',
    component : LoginComponent
  },
  {
    path :'list',
    component : ListComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path: '**',
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
