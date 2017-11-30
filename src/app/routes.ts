import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
/**
 * Created by Piyush on 11/30/2017.
 */
export const routes: Routes = [
  {path: '', redirectTo: 'login', canActivate: [AuthGuard], pathMatch: 'full'},
  // just for example no need of auth guard
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes, {useHash: true});
