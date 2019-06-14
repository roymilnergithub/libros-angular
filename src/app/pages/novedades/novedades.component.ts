import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
// import { Location } from '@angular/common';
// import { Util } from './../../common/util/util';
import { Global } from './../../common/global/global';
import * as $ from 'jquery';

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
    this.loadList();

    $(document).ready(function(){
      // $.getScript("assets/librerias/animsition/js/animsition.min.js");

// $.getScript("assets/librerias/jquery/jquery-3.2.1.min.js");
$.getScript("assets/librerias/animsition/js/animsition.min.js");
// $.getScript("assets/librerias/bootstrap/js/popper.js");
// $.getScript("assets/librerias/bootstrap/js/bootstrap.min.js");
// $.getScript("assets/librerias/select2/select2.min.js");
// $.getScript("assets/librerias/daterangepicker/moment.min.js");
// $.getScript("assets/librerias/daterangepicker/daterangepicker.js");
// $.getScript("assets/librerias/slick/slick.min.js");
// $.getScript("assets/js/slick-custom.js");
// $.getScript("assets/librerias/parallax100/parallax100.js");
// $.getScript("assets/librerias/MagnificPopup/jquery.magnific-popup.min.js");
// $.getScript("assets/librerias/isotope/isotope.pkgd.min.js");
// $.getScript("assets/librerias/sweetalert/sweetalert.min.js");
// $.getScript("assets/librerias/perfect-scrollbar/perfect-scrollbar.min.js");
$.getScript("assets/js/main.js");

    });

  }

  loadList() {
    this.novedadesList = this._global.LISTA_LIBROS.novedades;
  }

  getRouteImage(nombreImagen) {
    return './assets/imagenes/novedades/' + nombreImagen;
  }

}


