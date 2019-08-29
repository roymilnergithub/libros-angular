import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './../../common/global/global';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private headers = new HttpHeaders();

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

  /**
  * Guarda el ítem recibido
  * @param {Producto} ítem 
  * @returns {Observable<Producto>}
  */
  registrarNuevoLibro(libro: any) {
    //this.headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    //this.headers = new HttpHeaders().set('content-type', "multipart/form-data");
    this.headers = this.tokenCreationInHttpHeaders();
    return this.http.post<any>(this._global.URL_REST_SERVICES + 'nuevo-libro/', libro, { headers: this.headers });
  }

  public tokenCreationInHttpHeaders() {
    this.headers = new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    });
    return this.headers;
}
}