import { Component, OnInit } from '@angular/core';
import { Global } from './../../common/global/global';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public title: string = '';
  public contactoList: any = [];

  constructor(
    public _global: Global,
  ) { 
    this.title = this._global.TITLE_CONTACTO;
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    //this.contactoList = this._global.LISTA_LIBROS.contacto;
  }

  getRouteImage(nombreImagen) {
    return './assets/imagenes/contacto/' + nombreImagen;
  }

}
