import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
// import { Location } from '@angular/common';
// import { Util } from './../../common/util/util';
import { Global } from './../../common/global/global';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  public title: string = '';
  public novedadesList: any = [];

  constructor(
    //private _router: Router,
    public _global: Global,
    //private activeRoute: ActivatedRoute,
    //private location: Location
  ) { 
    this.title = this._global.TITLE_NOVEDADES;
  }

  ngOnInit() {
    // this._util.showLoader();
    this.loadList();
    // this._util.hideLoader();
  }

  loadList() {
    this.novedadesList = this._global.LISTA_LIBROS.novedades;
  }

  getRouteImage(nombreImagen) {
    return './assets/imagenes/novedades/' + nombreImagen;
  }

}
