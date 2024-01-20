import { Component, Input } from '@angular/core';
import { ChartDataValue, Scheme } from '../../chart.interfaces';

@Component({
  selector: 'app-pie-advanced-chart',
  templateUrl: './pie-advanced-chart.component.html',
  styleUrls: ['./pie-advanced-chart.component.scss']
})
export class PieAdvancedChartComponent {
  @Input() data!: ChartDataValue[];
  @Input() view!: [number, number];
  @Input() colorScheme: Scheme = 'vivid';
  defaultView!: [number, number];
}
