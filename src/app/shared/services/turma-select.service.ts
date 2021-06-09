import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaSelectService {

  constructor(private httpClient: HttpClient) { }

  getTurmasByName() {
    console.log('oi?');
    
    return this.httpClient.get(`${environment.api_url}/turmas`)
  }
}
