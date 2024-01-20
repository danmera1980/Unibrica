import { Component, OnDestroy } from '@angular/core';
import { DEBT_TABLE_DATA_MOCK } from './debts.interface';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { StadisticsService } from '../../stadistics.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnDestroy{
  tableData = DEBT_TABLE_DATA_MOCK;
  tableColumns = Object.keys(DEBT_TABLE_DATA_MOCK[0]);
  clickableColumns = new Set<string>([this.tableColumns[0]]);
  subscriptions: Subscription[] = [];
  params!: Params;

  constructor (private stadisticsService: StadisticsService) {
    this.subscriptions.push(
      this.stadisticsService.getParams().subscribe(params => {
        this.params = params;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
