import { DisciplinaService } from './../../services/disciplina.service';
import { Disciplina } from './../../models/disciplina';
import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent {


  disciplinas: any[] = [];

    monitorForm = this._formBuilder.group({
      id: null,
      nome: [''],
      foto: [''],
      whatsApp: [''],
      email: [''],
      conteudo: [''],
      disciplina: this._formBuilder.group({
        id: [0],
        nome: ['']
      }),
      disponibilidade: this._formBuilder.array([this.criarDisponibilidade()])
    });

    agenda = [{ week_day: 'SEGUNDA', from: '', to: '' }];


    constructor(private _formBuilder: FormBuilder, disciplinaService:DisciplinaService) {{
        disciplinaService.buscarDisciplinas()
                .subscribe(res => {
                  this.disciplinas = res?.map(i=>{
                  return{
                    value: i.id,
                    label: i.nome
                  }
                })
        });
  }

    }

    addAgenda() {
      this.agenda.push({ week_day: 'SEGUNDA', from: '', to: '' });
    }

    get disponibilidade(): FormArray {
      return this.monitorForm.get('disponibilidade') as FormArray;
    }

    addDisponibilidade() {
      this.disponibilidade.push(this.criarDisponibilidade());
    }

    criarDisponibilidade() {
      return this._formBuilder.group({
        diaSemana: [''],
        das: [''],
        ate: ['']
      });
    }

    onSalvar() {

    }
}

