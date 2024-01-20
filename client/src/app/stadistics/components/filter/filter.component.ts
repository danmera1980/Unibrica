import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterValues } from './filter.interfaces';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() currentRoute!:string; 
  @Output() filterEventEmitter = new EventEmitter<FilterValues>();
  range = new FormGroup ({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  })   
  searchField!:string;
  searchValue!:string;

  changeSearchValue (search:string):void {
    this.searchValue=search;
  }

  searchButtonClick () {
    let filterValues: FilterValues = {
      search: this.searchValue,
      searchField: this.searchField,
      rangeStart: this.range.get('start')?.value,
      rangeEnd: this.range.get('end')?.value
    }
    this.filterEventEmitter.emit(filterValues);
  }

}
