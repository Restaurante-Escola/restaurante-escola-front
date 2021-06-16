import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }

	async getClasses() {
    let response: any = await this.httpClient.get(`${environment.api_url}/turmas`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

  async deleteClass(numero: any) {
    let response: any = await this.httpClient.delete(`${environment.api_url}/turmas/${numero}`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

  async updateClass(classData: any) {
    console.log("classData", classData);
		
    let response: any = await this.httpClient.put(`${environment.api_url}/turmas/${classData.numero}`, classData).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

  async createClass(classData: any) {
    let response: any = await this.httpClient.post(`${environment.api_url}/turmas`, classData).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	classToForm(classData: any){
		let formClass = {
			numero: classData.numero,
			codigo: classData.codigo,
      inicioTurma: moment(classData.inicioTurma).format(),
      fimTurma: moment(classData.fimTurma).format(),
    };

    return formClass;
	}

}
