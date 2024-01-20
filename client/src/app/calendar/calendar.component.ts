import { Component, Input } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import {
  isSameDay,
  isSameMonth
} from 'date-fns';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Input() events: CalendarEvent[] = [];
  @Input() viewDate: Date = new Date();
  @Input() view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  
  activeDayIsOpen: boolean = true;
  
  refresh = new Subject<void>();

  constructor() { }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log('handleEvent', action, event);
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  setView(view: CalendarView) {
    this.view = view;
  }
}
