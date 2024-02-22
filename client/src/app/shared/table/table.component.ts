import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkColumnDef } from '@angular/cdk/table';
import { Debt } from 'src/app/stadistics/components/debts/debts.interface';
import { Debtor } from 'src/app/stadistics/components/debtors/debtors.interface';
import { Client } from 'src/app/stadistics/components/clients/clients.interfaces';

const MaterialModules = [
  MatTableModule,
]

interface TableClickEvent {
  column:string,
  value: any
}

export type MatTableDataSourceInput = Debt | Debtor | Client;
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
  @Input() dataSource!: MatTableDataSource<MatTableDataSourceInput>;
  @Input() columns:string[] = [];
  @Input() clickableColumns!:Set<string>;
  @Output() elementClickEmitter = new EventEmitter<TableClickEvent>();

  columnNames: { [key: string]: string } = {
    createdAt: 'Creado',
    updatedAt: 'Actualizado',
    dueDate: 'Vencimiento',
    id: 'Id',
    idDebt: 'ID Deuda',
    amount: 'Monto',
    firstNames: 'Nombre',
    lastNames: 'Apellido',
    dni: 'DNI',
    name: 'Nombre',
    clientId: 'ID Cliente'
  };

  ngOnInit() {
    console.log('COLUMNS : ', this.columns);
  }

  elementClick (event: TableClickEvent):void {
    if (!this.clickableColumns) return;
    if(this.clickableColumns.has(event.column)) {
      this.elementClickEmitter.emit(event)
    }
  }
}
