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
 
  getAlunosByTurmaNumero(numeroTurma: number) {
    return this.httpClient.get(`${environment.api_url}/turmas/alunos/` + numeroTurma)
  }

  getFrequenciaByTurmaDate(numeroTurma: number, selectedDate: string) {
    const query = JSON.stringify({ numero: numeroTurma, data: selectedDate })
    return this.httpClient.get(`${environment.api_url}/frequencias/data?` + query)
  }
}
