import { Component } from '@angular/core';
import { CLIENT_TABLE_COLUMNS_MOCK } from './clients.interfaces';
import { StadisticsService } from '../../stadistics.service';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  tableData = CLIENT_TABLE_COLUMNS_MOCK;
  tableColumns = Object.keys(CLIENT_TABLE_COLUMNS_MOCK[0]);
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
