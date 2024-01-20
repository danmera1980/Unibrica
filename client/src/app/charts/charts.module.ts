import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { PieAdvancedChartComponent } from './components/pie-advanced-chart/pie-advanced-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  declarations: [VerticalBarChartComponent, PieChartComponent, PieAdvancedChartComponent, LineChartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [VerticalBarChartComponent, PieChartComponent, PieAdvancedChartComponent, LineChartComponent],
})
export class ChartsModule {}
