import { Component } from '@angular/core';
import { ExporterService } from 'src/app/core/services/exporter.service';
import { EMPLOYEE_TABLE_DATA_MOCK } from '../../human-resources.interface';

@Component({
  selector: 'app-employees-requests',
  templateUrl: './employees-requests.component.html',
  styleUrls: ['./employees-requests.component.scss'],
})
export class EmployeesRequestsComponent {
  // tableData = EMPLOYEE_TABLE_DATA_MOCK;
  // tableColumns = Object.keys(EMPLOYEE_TABLE_DATA_MOCK[0]);
  // clickableColumns = new Set<string>([this.tableColumns[0]]);

  // constructor(private exporterService: ExporterService) {}

  // exportToExcel(): void {
  //   this.exporterService.exportToExcel(this.tableData, 'Solicitudes de empleados');
  // }
}
