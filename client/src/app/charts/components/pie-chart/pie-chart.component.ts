import { Component, Input } from '@angular/core';
import { ChartDataValue, Scheme } from '../../chart.interfaces';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  @Input() data!: ChartDataValue[];
  @Input() view!: [number, number];
  @Input() colorScheme: Scheme = 'vivid';
  defaultView!: [number, number];
}
