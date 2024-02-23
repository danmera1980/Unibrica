import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterService } from 'src/app/core/services/filter.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  range = new FormGroup ({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  })

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  changeSearchValue(search: string): void {
    this.filterService.updateSearchValue(search);
  }

  changeSearchField(field: any): void {
    this.filterService.updateSearchField(field);
  }

  changeRangeStart(start: Date | null): void {
    this.filterService.updateRangeStart(start);
  }

  changeRangeEnd(end: Date | null): void {
    this.filterService.updateRangeEnd(end);
  }

  searchButtonClick(): void {
    // You can perform additional logic here if needed
  }
}
