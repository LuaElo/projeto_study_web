import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Monitor } from '../models/monitor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

    private URL : string = 'http://localhost:8080/monitores';
    constructor(private httpClient: HttpClient){ }

    inserir(monitor: Monitor): Observable<Monitor>{
      return this.httpClient.post<Monitor>(this.URL, monitor);
    }
}
