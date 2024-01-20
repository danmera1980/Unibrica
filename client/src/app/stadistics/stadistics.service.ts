import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FilterValues } from './components/filter/filter.interfaces';
import { NavigationExtras, Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class StadisticsService {
  params$!: Observable<Params>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.params$ = this.activatedRoute.queryParams;
  }

  getParams():Observable<Params> {
    return this.params$
  }

  navigateWithQueryParams(pageInfo: PageEvent, filters: FilterValues, route: string): void {
    const queryParams: any = {
      pageIndex: pageInfo.pageIndex || 1,
      pageSize: pageInfo.pageSize || 25,
    };

    if (filters.search) {
      queryParams.search = filters.search;
    }

    if (filters.searchField) {
      queryParams.searchField = filters.searchField;
    }

    if (filters.rangeStart) {
      queryParams.rangeStart = filters.rangeStart.setHours(0,0,0,0);
    }

    if (filters.rangeEnd) {
      queryParams.rangeEnd = filters.rangeEnd.setHours(0,0,0,0);
    }
    const navigationExtras: NavigationExtras = {
      queryParams,
    };
    this.router.navigate([`estadisticas/${route}`], navigationExtras);
  }
}
