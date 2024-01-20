import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarChartComponent } from './vertical-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { chartMockedData, chartMockedLabels } from '../../mocks/chart-data.mock';

describe('VerticalBarChartComponent', () => {
  let component: VerticalBarChartComponent;
  let fixture: ComponentFixture<VerticalBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalBarChartComponent],
      imports: [
        NgxChartsModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(VerticalBarChartComponent);
    component = fixture.componentInstance;
    component.data = chartMockedData;
    component.labels = chartMockedLabels;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
