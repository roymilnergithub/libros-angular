import { Component, OnInit } from '@angular/core';
import { Global } from './../../common/global/global';

@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.component.html',
  styleUrls: ['./recomendados.component.css']
})
export class RecomendadosComponent implements OnInit {

  public title: string = '';
  public recomendadosList: any = [];

  constructor(
    public _global: Global,
  ) { 
    this.title = this._global.TITLE_RECOMENDADOS;
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.recomendadosList = this._global.LISTA_LIBROS.recomendados;
  }

  getRouteImage(nombreImagen) {
    return './assets/imagenes/recomendados/' + nombreImagen;
  }

}
