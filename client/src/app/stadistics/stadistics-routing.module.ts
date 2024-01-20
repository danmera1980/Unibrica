import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StadisticsComponent } from './stadistics.component';
import { DebtsComponent } from './components/debts/debts.component';
import { DebtorsComponent } from './components/debtors/debtors.component';
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [
  { path: '', redirectTo: 'deudas', pathMatch: 'full' },
  {
    path: '',
    component: StadisticsComponent,
    children: [
      {
        path: 'deudas',
        title: 'Unibrica - Estadísticas | Deudas',
        component: DebtsComponent,
      },
      {
        path: 'deudores',
        title: 'Unibrica - Estadísticas | Deudores',
        component: DebtorsComponent,
      },
      {
        path: 'clientes',
        title: 'Unibrica - Estadísticas | Clientes',
        component: ClientsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StadisticsRoutingModule {}
