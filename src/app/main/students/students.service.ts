import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

	async getStudents() {
    let response: any = await this.httpClient.get(`http://restauranteescolaapiv1-env.eba-n9htc7et.us-east-2.elasticbeanstalk.com:8080/alunos`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }
}
