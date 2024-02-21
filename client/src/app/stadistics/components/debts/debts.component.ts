import { Component, OnDestroy } from '@angular/core';
import { DEBT_TABLE_DATA_MOCK, Debt } from './debts.interface';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { StadisticsService } from '../../stadistics.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss'],
})
export class DebtsComponent implements OnDestroy {
  tableData = [];
  tableColumns = Object.keys(DEBT_TABLE_DATA_MOCK[0]);
  clickableColumns = new Set<string>([]);
  subscriptions: Subscription[] = [];
  debts: Debt[] = [];
  params!: Params;

  constructor(private statisticsService: StadisticsService) {
    this.subscriptions.push(
      this.statisticsService.getParams().subscribe((params) => {
        this.params = params;
      })
      );

      this.subscriptions.push(
        this.statisticsService.getAllDebts().subscribe((debts) => {
          this.tableData = debts;
          this.tableColumns = Object.keys(debts[0]);
          this.clickableColumns = new Set<string>([this.tableColumns[0]]);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
