import { PrincipalComponent } from './views/principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/guards/auth.guard';
import { FullLayoutComponent } from 'app/containers';
import { LoginComponent } from 'app/views/pages/login/login.component';
import { SharedModule } from './commons/shared/shared.module';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    data: { title: 'Início'},
    children:
    [
      {
        path: 'principal',
        component: PrincipalComponent
      },
      {
        path: 'faturao',
        loadChildren: 'app/views/faturao/faturao.module#FaturaoModule',
        canLoad: [AuthGuard],
        data:
        {
          key: 'I_FATURA_PUBLICA'
        }
      }
    ]
  },
  { path: '', component: PrincipalComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), SharedModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
