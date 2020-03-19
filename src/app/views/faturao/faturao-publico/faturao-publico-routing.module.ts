import { FaturaoPublicoFiltroComponent } from './faturao-publico-filtro/faturao-publico-filtro.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';
import { SharedModule } from 'app/commons/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'faturao-publico-filtro',
    pathMatch: 'full'
  },
  {  path: '', canActivateChild: [AuthGuard], data: { title: 'Fatura Corporativa' },
        children: [
          // FATURÃO
          { path: 'faturao-publico-filtro', component: FaturaoPublicoFiltroComponent , data: { title: 'Fatura Pública'}}
          
          /*,
          { path: 'editar-perfil', component: EditarPerfilComponent , data: { title: 'Editar Perfil' }},
          { path: 'cadastro-perfil', component: CadastroPerfilComponent, data: { title: 'Cadastro de Perfis' } },
          { path: 'vincular-perfil-recurso', component: VincularPerfilRecursoComponent, data: { title: 'Vincular Perfil Recursos' } }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})

export class FaturaoPublicoRoutingModule { }
