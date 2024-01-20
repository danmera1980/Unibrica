import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieAdvancedChartComponent } from './pie-advanced-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { chartMockedData } from '../../mocks/chart-data.mock';

describe('PieAdvancedChartComponent', () => {
  let component: PieAdvancedChartComponent;
  let fixture: ComponentFixture<PieAdvancedChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieAdvancedChartComponent],
      imports: [
        NgxChartsModule,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(PieAdvancedChartComponent);
    component = fixture.componentInstance;
    component.data = chartMockedData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
