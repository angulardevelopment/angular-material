import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Analytics {

  constructor() { }
   private readonly _http = inject(HttpClient);
 sendAnalyticsData(data: AnalyticsData): Observable<unknown> {
   return this._http.post('/api/analytics', data, { keepalive: true });
 }
}

export interface AnalyticsData {
  event: string;
  userId: string;
  timestamp: Date;
  [key: string]: any; // Allow additional properties
}