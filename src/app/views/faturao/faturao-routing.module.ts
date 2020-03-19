import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/guards/auth.guard';
import { SharedModule } from 'app/commons/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'faturao-publico',
    pathMatch: 'full'
  },
  {
    path: '', canActivateChild: [AuthGuard], data: { title: '' },
    children: [
      {
        path: 'faturao-publico',
        loadChildren: 'app/views/faturao/faturao-publico/faturao-publico.module#FaturaoPublicoModule',
        canLoad: [AuthGuard],
        data:
        {
          key: 'I_FATURA_PUBLICA'
        }
      }
    ]
  }
  // {
  //   path: '', canActivateChild: [AuthGuard], data: { title: '' },
  //   children: [
  //     {
  //       path: 'fatura-privada',
  //       loadChildren: 'app/views/faturao/fatura-privada/fatura-privada.module#FaturaoPublicoModule',
  //       canLoad: [AuthGuard],
  //       data:
  //       {
  //         key: 'I_FATURA_PRIVADA'
  //       }
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})

export class FaturaoRoutingModule { }
