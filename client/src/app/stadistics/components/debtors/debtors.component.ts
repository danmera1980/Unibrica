import { StadisticsService } from './../../stadistics.service';
import { Component, ViewChild } from '@angular/core';
import { DEBTOR_TABLE_DATA_MOCK, Debtor } from './debtors.interface';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Debt } from '../debts/debts.interface';
import { MatTableDataSourceInput } from 'src/app/shared/table/table.component';

@Component({
  selector: 'app-debtors',
  templateUrl: './debtors.component.html',
  styleUrls: ['./debtors.component.scss']
})
export class DebtorsComponent {
  debtors!: Debtor[]
  tableData!: MatTableDataSource<MatTableDataSourceInput>;
  tableColumns = Object.keys(DEBTOR_TABLE_DATA_MOCK[0]);
  clickableColumns = new Set<string>([this.tableColumns[0]]);
  subscriptions: Subscription[] = [];
  params!: Params;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor (private statisticsService: StadisticsService) {
    this.subscriptions.push(
      this.statisticsService.getParams().subscribe(params => {
        this.params = params;
      })
    )

    this.subscriptions.push(
      this.statisticsService.getAllDebtors().subscribe((debtors) => {
        this.debtors = debtors;
        this.tableData = new MatTableDataSource<MatTableDataSourceInput>(debtors);
        this.tableColumns = Object.keys(debtors[0]);
        this.clickableColumns = new Set<string>([this.tableColumns[0]]);
        this.tableData.paginator = this.paginator;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
