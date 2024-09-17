import { Disciplina } from './../models/disciplina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private URL : string = 'http://localhost:8080/disciplinas';
  constructor(private httpCliente: HttpClient) { }
  buscarDisciplinas(): Observable <Disciplina[]>{
    return this.httpCliente.get<Disciplina[]>(this.URL
      )
  }
}
