import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { chartMockedData } from '../../mocks/chart-data.mock';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartComponent],
      imports: [
        NgxChartsModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    component.data = chartMockedData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
