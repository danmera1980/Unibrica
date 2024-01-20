import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ExporterService } from '../core/services/exporter.service';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { TableComponent } from '../shared/table/table.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesRequestsComponent } from './components/employees-requests/employees-requests.component';
import { HumanResourcesRoutingModule } from './human-resources-routing.module';
import { HumanResourcesComponent } from './human-resources.component';
import { RequestsStatusComponent } from './components/requests-status/requests-status.component';

@NgModule({
  declarations: [
    HumanResourcesComponent,
    EmployeesListComponent,
    EmployeesRequestsComponent,
    RequestsStatusComponent,
  ],
  imports: [
    CommonModule,
    HumanResourcesRoutingModule,
    PaginationComponent,
    SearchBarComponent,
    TableComponent,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [ExporterService],
})
export class HumanResourcesModule {}
