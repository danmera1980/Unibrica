import { Component, Input } from '@angular/core';
import { ChartDataValue, Scheme, XYLabels } from '../../chart.interfaces';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent {
  @Input() data!: ChartDataValue[];
  @Input() labels!: XYLabels;
  @Input() view!:[number, number];
  @Input() colorScheme:Scheme = 'cool';

  defaultView!:[number,number];
  onResize(xSize:number, ysize:number) {
    this.defaultView = [xSize , ysize];
  }

/* This should prove useful if we start having problems with the responsive design. I'll leave it commented for now
  onResize(xSize:number, ysize:number) {
    this.defaultView = [xSize , ysize];
  } */
}
