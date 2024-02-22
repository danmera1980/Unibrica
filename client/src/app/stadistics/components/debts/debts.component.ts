import { Component, OnDestroy, ViewChild } from '@angular/core';
import { DEBT_TABLE_DATA_MOCK, Debt } from './debts.interface';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { StadisticsService } from '../../stadistics.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Debtor } from '../debtors/debtors.interface';
import { MatTableDataSourceInput } from 'src/app/shared/table/table.component';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss'],
})
export class DebtsComponent implements OnDestroy {
  tableData!: MatTableDataSource<MatTableDataSourceInput>;
  tableColumns: string[] = [];
  clickableColumns = new Set<string>();
  subscriptions: Subscription[] = [];
  debts: Debt[] = [];
  params!: Params;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private statisticsService: StadisticsService) {
    this.subscriptions.push(
      this.statisticsService.getParams().subscribe((params) => {
        this.params = params;
      })
    );

    this.subscriptions.push(
      this.statisticsService.getAllDebts().subscribe((debts) => {
        this.debts = debts;
        this.tableData = new MatTableDataSource<MatTableDataSourceInput>(debts);
        this.tableColumns = Object.keys(debts[0]);
        this.clickableColumns = new Set<string>([this.tableColumns[0]]);
        this.tableData.paginator = this.paginator;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
