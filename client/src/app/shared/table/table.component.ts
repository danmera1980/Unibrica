import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

const MaterialModules = [
  MatTableModule
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
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input({ required: true }) dataSource: Object[] = [];
  @Input({ required: true }) columns:string[] = [];
  @Input() clickableColumns!:Set<string>;
  @Output() elementClickEmitter = new EventEmitter<TableClickEvent>();

  elementClick (event: TableClickEvent):void {
    if (!this.clickableColumns) return;
    if(this.clickableColumns.has(event.column)) {
      this.elementClickEmitter.emit(event)
    }
  }
}
