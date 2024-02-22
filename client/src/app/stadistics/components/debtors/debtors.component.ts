import { StadisticsService } from './../../stadistics.service';
import { Component } from '@angular/core';
import { DEBTOR_TABLE_DATA_MOCK } from './debtors.interface';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';

@Component({
  selector: 'app-debtors',
  templateUrl: './debtors.component.html',
  styleUrls: ['./debtors.component.scss']
})
export class DebtorsComponent {
  // tableData = DEBTOR_TABLE_DATA_MOCK;
  // tableColumns = Object.keys(DEBTOR_TABLE_DATA_MOCK[0]);
  // clickableColumns = new Set<string>([this.tableColumns[0]]);
  // subscriptions: Subscription[] = [];
  // params!: Params;

  // constructor (private stadisticsService: StadisticsService) {
  //   this.subscriptions.push(
  //     this.stadisticsService.getParams().subscribe(params => {
  //       this.params = params;
  //     })
  //   )
  // }

  // ngOnDestroy(): void {
  //   this.subscriptions.forEach(subscription => subscription.unsubscribe());
  // }
}
