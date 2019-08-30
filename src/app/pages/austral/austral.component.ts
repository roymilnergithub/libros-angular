import { Component, OnInit } from '@angular/core';
import { Global } from './../../common/global/global';

// servicios
import { RestService } from './../nuevo-libro/rest.service';

@Component({
  selector: 'app-austral',
  templateUrl: './austral.component.html',
  styleUrls: ['./austral.component.css']
})
export class AustralComponent implements OnInit {

  public title: string = '';
  public australList: any = [];
  public listaPluton: any = [];

  constructor(
    public _global: Global,
    protected restService: RestService,
  ) {
    this.title = this._global.TITLE_AUSTRAL;
  }

  ngOnInit() {
    this.loadList();
    this.obtenerListaPluton();
  }

  loadList() {
    this.australList = this._global.LISTA_LIBROS.austral;
  }

  getRouteImage(nombreImagen) {
    return './assets/imagenes/austral/' + nombreImagen;
  }

  obtenerListaPluton() {
    this.restService.getListaPluton()
      .subscribe((data) => {
        this.listaPluton = data;
      },
        (error) => {
          console.error(error);
        }
      );
  }

  mostrarImagen(imagenBase){
    let preview = document.getElementById("imgFileReturn") as HTMLImageElement;
    preview.src = (imagenBase == null) ? '' : imagenBase;
  }

}
