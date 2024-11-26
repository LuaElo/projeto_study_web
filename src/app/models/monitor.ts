import { Disciplina } from "./disciplina";


export class Monitor {
  public id: number = 0;
  public nome: string = '';
  public foto: string = '';
  public whatsapp: string ='';
  public email: string = '';
  public conteudo: string = '';
  public disciplina : Disciplina = new Disciplina ();
}
