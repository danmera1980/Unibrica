import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartComponent } from './line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { chartMockedLabels, lineChartMockedData } from '../../mocks/chart-data.mock';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartComponent],
      imports: [
        NgxChartsModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    component.data = lineChartMockedData;
    component.labels = chartMockedLabels;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
