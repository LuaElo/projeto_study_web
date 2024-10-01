import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conexao } from '../models/conexao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {
  apiURL : string = 'http://localhost:8080/conexoes';
  constructor(private httpClient: HttpClient){ }
  getConexoes() : Observable<number>{
   return this.httpClient.get<number>(`${this.apiURL}`);

  }
}
