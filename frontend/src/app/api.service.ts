import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private BASE_URL = 'http://localhost:4020';
  // private BASE_URL = 'http://127.0.0.1:4020';

  getData(): Observable<any> {
    const customHeader = 'LETMEINNNNN';
    const headers = new HttpHeaders().set('x-stupidheader', customHeader);

    const path = 'service2/hello';
    //const path = 'data'
    return this.http.get(`${this.BASE_URL}/${path}`, { headers });
  }

  getData1(): Observable<any> {
    const customHeader = 'LETMEINNNNN';
    const headers = new HttpHeaders().set('x-stupidheader', customHeader);

    const path = 'service1/hello';
    //const path = 'data'
    return this.http.get(`${this.BASE_URL}/${path}`, { headers });
  }

  getData2(): Observable<any> {
    const customHeader = 'LETMEINNNNN';
    const headers = new HttpHeaders().set('x-stupidheader', customHeader);

    const path = 'service2/hello';
    //const path = 'data'
    return this.http.get(`${this.BASE_URL}/${path}`, { headers });
  }
}
