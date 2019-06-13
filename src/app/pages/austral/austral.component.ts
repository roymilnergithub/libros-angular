import { Component, OnInit } from '@angular/core';
import { Global } from './../../common/global/global';

@Component({
  selector: 'app-austral',
  templateUrl: './austral.component.html',
  styleUrls: ['./austral.component.css']
})
export class AustralComponent implements OnInit {

  public title: string = '';
  public australList: any = [];

  constructor(
    public _global: Global,
  ) { 
    this.title = this._global.TITLE_AUSTRAL;
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.australList = this._global.LISTA_LIBROS.austral;
  }

  getRouteImage(nombreImagen) {
    return './assets/imagenes/austral/' + nombreImagen;
  }

}
