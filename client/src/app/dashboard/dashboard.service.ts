import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ChartDataValue,
  LineChartData,
  LineChartDataWithLabels,
  PieAdvancedChartData,
  PieChartData,
  Scheme,
  VerticalBarChartData,
  XYLabels,
} from '../charts/chart.interfaces';
import {
  chartMockedData,
  chartMockedLabels,
  lineChartMockedData,
} from '../charts/mocks/chart-data.mock';
import { CalendarEvent } from 'angular-calendar';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  getLineChartDataWithLabels(): Observable<LineChartDataWithLabels> {
    const data: LineChartData[] = lineChartMockedData;
    const labels: XYLabels = chartMockedLabels;

    const lineChartDataWithLabels: LineChartDataWithLabels = {
      data,
      labels,
    };

    return of(lineChartDataWithLabels);
  }

  getPieChartData(): Observable<PieChartData> {
    const data: ChartDataValue[] = chartMockedData;
    const view: [number, number] = [400, 300];
    const colorScheme: Scheme = 'vivid';

    const pieChartData: PieChartData = {
      data,
      view,
      colorScheme,
    };

    return of(pieChartData);
  }

  getPieAdvancedChartData(): Observable<PieAdvancedChartData> {
    const data: ChartDataValue[] = chartMockedData;
    const view: [number, number] = [400, 300];
    const colorScheme: Scheme = 'vivid';

    const pieChartData: PieChartData = {
      data,
      view,
      colorScheme,
    };

    return of(pieChartData);
  }

  getVerticalBarChartData(): Observable<VerticalBarChartData> {
    const data: ChartDataValue[] = chartMockedData;
    const labels: XYLabels = chartMockedLabels;
    const view: [number, number] = [800, 400];
    const colorScheme: Scheme = 'cool';

    const verticalBarChartData: VerticalBarChartData = {
      data,
      labels,
      view,
      colorScheme,
    };

    return of(verticalBarChartData);
  }

  getCalendarEvents(): Observable<CalendarEvent[]> {
    // const colors: Record<string, EventColor> = {
    //   red: {
    //     primary: '#ad2121',
    //     secondary: '#FAE3E3',
    //   },
    //   blue: {
    //     primary: '#1e90ff',
    //     secondary: '#D1E8FF',
    //   },
    //   yellow: {
    //     primary: '#e3bc08',
    //     secondary: '#FDF1BA',
    //   },
    // };
    // Simula eventos para el calendario
    const events: CalendarEvent[] = [
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        // color: { ...colors.red },
        // actions: this.actions,
        allDay: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      },
      // {
      //   start: startOfDay(new Date()),
      //   title: 'An event with no end date',
      //   color: { ...colors.yellow },
      //   actions: this.actions,
      // },
      // {
      //   start: subDays(endOfMonth(new Date()), 3),
      //   end: addDays(endOfMonth(new Date()), 3),
      //   title: 'A long event that spans 2 months',
      //   color: { ...colors.blue },
      //   allDay: true,
      // },
      // {
      //   start: addHours(startOfDay(new Date()), 2),
      //   end: addHours(new Date(), 2),
      //   title: 'A draggable and resizable event',
      //   color: { ...colors.yellow },
      //   actions: this.actions,
      //   resizable: {
      //     beforeStart: true,
      //     afterEnd: true,
      //   },
      //   draggable: true,
      // },
    ];

    return of(events);
  }
}
