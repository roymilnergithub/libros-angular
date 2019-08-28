import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './../../common/global/global';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private headers: any;

  constructor(
    protected http: HttpClient,
    public _global: Global
  ) { }

  getAutores() {
    return this.http.get(this._global.URL_REST_SERVICES + 'autores/');
  }

  getEditoriales() {
    return this.http.get(this._global.URL_REST_SERVICES + 'editoriales/');
  }

  registrarNuevoLibro(libro){
    this.headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post(this._global.URL_REST_SERVICES + 'nuevo-libro/', libro, {headers: this.headers});

    // this.headers = new HttpHeaders({
    //     'Cache-Control': 'no-cache',
    //     'Pragma': 'no-cache'
    // });
    // this.headers = this.headers.append('token', this.storageService.get(TOKEN));
    // return this.headers;
  }
}