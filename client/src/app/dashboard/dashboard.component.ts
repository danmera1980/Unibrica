import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  LineChartData,
  PieAdvancedChartData,
  PieChartData,
  VerticalBarChartData,
  XYLabels,
} from '../charts/chart.interfaces';
import { UploadFileModalComponent } from '../shared/modal/upload-file-modal.component';
import { DashboardService } from './dashboard.service';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lineChartData: LineChartData[] = [];
  lineChartLabels!: XYLabels;
  pieChartData!: PieChartData;
  pieAdvancedChartData!: PieAdvancedChartData;
  verticalBarChartData!: VerticalBarChartData;

  tusEventos: CalendarEvent[] = []; // Define tus eventos aquí
  tuFecha: Date = new Date(); // Define tu fecha aquí

  constructor(public dialog: MatDialog, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getLineChartDataWithLabels().subscribe((dataWithLabels) => {
      this.lineChartData = dataWithLabels.data;
      this.lineChartLabels = dataWithLabels.labels;
    });

    this.dashboardService.getPieChartData().subscribe((data) => {
      this.pieChartData = data;
    });

    this.dashboardService.getPieAdvancedChartData().subscribe((data) => {
      this.pieAdvancedChartData = data;
    });

    this.dashboardService.getVerticalBarChartData().subscribe((data) => {
      this.verticalBarChartData = data;
    });

    this.loadCalendarEvents(); // Carga los eventos del calendario
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UploadFileModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  loadCalendarEvents() {
    this.dashboardService.getCalendarEvents().subscribe((events) => {
      this.tusEventos = events; // Asigna los eventos al arreglo
    });
  }
}
