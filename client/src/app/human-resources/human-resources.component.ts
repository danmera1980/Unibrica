import { Component } from '@angular/core';
import { EMPLOYEE_TABLE_DATA_MOCK } from './human-resources.interface';
import { ExporterService } from '../core/services/exporter.service';

@Component({
  selector: 'app-human-resources',
  templateUrl: './human-resources.component.html',
  styleUrls: ['./human-resources.component.scss'],
})
export class HumanResourcesComponent {
  tableData = EMPLOYEE_TABLE_DATA_MOCK;
  tableColumns = Object.keys(EMPLOYEE_TABLE_DATA_MOCK[0]);
  clickableColumns = new Set<string>([this.tableColumns[0]]);

  constructor(private exporterService: ExporterService) {}

  exportToExcel(): void {
    this.exporterService.exportToExcel(this.tableData, 'employees');
  }
}
