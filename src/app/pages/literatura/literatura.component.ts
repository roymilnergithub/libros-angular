import { Component, OnInit } from '@angular/core';
import { Global } from './../../common/global/global';

@Component({
  selector: 'app-literatura',
  templateUrl: './literatura.component.html',
  styleUrls: ['./literatura.component.css']
})
export class LiteraturaComponent implements OnInit {

  public title: string = '';
  public literaturaList: any = [];

  constructor(
    public _global: Global,
  ) { 
    this.title = this._global.TITLE_LITERATURA;
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.literaturaList = this._global.LISTA_LIBROS.literatura;
  }

  getRouteImage(nombreImagen) {
    return './assets/imagenes/literatura/' + nombreImagen;
  }

}
