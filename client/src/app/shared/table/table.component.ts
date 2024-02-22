import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkColumnDef } from '@angular/cdk/table';
import { Debt } from 'src/app/stadistics/components/debts/debts.interface';

const MaterialModules = [
  MatTableModule,
]

interface TableClickEvent {
  column:string,
  value: any
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    ...MaterialModules
  ],
  // providers: [CdkColumnDef],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() dataSource!: MatTableDataSource<Debt>;
  @Input() columns:string[] = [];
  @Input() clickableColumns!:Set<string>;
  @Output() elementClickEmitter = new EventEmitter<TableClickEvent>();

  elementClick (event: TableClickEvent):void {
    if (!this.clickableColumns) return;
    if(this.clickableColumns.has(event.column)) {
      this.elementClickEmitter.emit(event)
    }
  }
}
