import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassFrequencyService {

  constructor(
    private httpClient: HttpClient
  ) { }
 
  getAlunosByTurmaCodigo(codigoTurma: number) {
    return this.httpClient.get(`${environment.api_url}/turmas/alunos/` + codigoTurma)
  }
}
