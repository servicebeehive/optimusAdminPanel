import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path:'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
