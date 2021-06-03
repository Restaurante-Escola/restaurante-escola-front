import { Injectable } from '@angular/core';
import * as localForage from 'localforage';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

	async login(loginData: any){
    let response: any = await this.httpClient.post(`${environment.api_url}/auth`, loginData).toPromise();
		this.setCurrentUser(response)
    return response;
  }

	async getCurrentUser(){
    return await localForage.getItem('currentUser');
  }

	async setCurrentUser(currentUser: any){
    await localForage.setItem('currentUser', currentUser);
  }

  async getToken(){
    let currentUser:any = await this.getCurrentUser();
    return currentUser?.token;
  }

	async isAuthenticated(){
    let currentUser = await this.getCurrentUser();
    if(currentUser){
      return true
    }
    return false;
  }

	async logout(){
	  await localForage.removeItem('currentUser');
  }
	
}
