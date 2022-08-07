import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitInfoComponent } from './git-info/git-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginformComponent},
  {path: 'reg', component: RegistrationformComponent},
  {path: 'git', component: GitInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
