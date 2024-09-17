import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent {

  disciplinas: any[] = [{ "value" : 1, "label" : "Artes" },
    { "value" : 2, "label" : "Biologia" },
    { "value" : 3, "label" : "Ciências" },
    { "value" : 4, "label" : "Educação física" },
    { "value" : 5, "label" : "Física" },
    { "value" : 6, "label" : "Geografia" },
    { "value" : 7, "label" : "História" },
    { "value" : 8, "label" : "Matemática" },
    { "value" : 9, "label" : "Português" },
    { "value" : 10, "label" : "Química" }];


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
  

    constructor(private _formBuilder: FormBuilder) {
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
