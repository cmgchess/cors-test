import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private BASE_URL = 'http://localhost:4020';

  getData(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/data`);
  }
}
