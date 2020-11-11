/* tslint:disable:no-trailing-whitespace */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../../../shared/models/Produit';
import {environment} from '../../environments/environment';
import {Login} from "../../../shared/models/Login";
import {Client} from "../../../shared/models/Client";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private URLBOUCHON: string = environment.urlDuBouchon;
  constructor(private http: HttpClient) {}

  GetData(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.URLBOUCHON);
  }

  PostLogin(login: Login): Observable<any> {
    return this.http.post<Login>('api/user/login', login);
  }

  PostRegister(client: Client) : Observable<any>{
    return this.http.post<any>('api/user/register', client);
  }

  GetClientData(client: Client) {
    return client;
  }
}
