import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FilterValues } from './components/filter/filter.interfaces';
import { NavigationExtras, Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Debtor } from './components/debtors/debtors.interface';

@Injectable()
export class StadisticsService {

  private DebtsUrl = `${environment.envVar.API_URL}/debts`;
  private DebtorsUrl = `${environment.envVar.API_URL}/debtors`;

  params$!: Observable<Params>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.params$ = this.activatedRoute.queryParams;
  }

  getParams():Observable<Params> {
    return this.params$
  }

  getAllDebts(): Observable<any> {
    return this.http.get<any>(`${this.DebtsUrl}/all`, { withCredentials: true });
  }

  getAllDebtors(): Observable<Debtor[]> {
    return this.http.get<any>(`${this.DebtorsUrl}`, { withCredentials: true });
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
