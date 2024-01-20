import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable()
export class ClientsService {
  private ClientsUrl = `${environment.envVar.API_URL}/clients`;
  constructor(public http: HttpClient) {}

  getClients(): Observable<any> {
    return this.http.get<any>(`${this.ClientsUrl}/all`, {withCredentials: true});
  }
}
