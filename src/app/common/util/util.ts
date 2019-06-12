import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { SpinnerLoaderService } from './../spinner/spinner.loader.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Util {

    private headers: HttpHeaders = new HttpHeaders();
    constructor(
        private location: Location,
        private _load: SpinnerLoaderService,
        private router: Router
    ) {
    }

    /**
     * Metodo para Regresar a la dirección anterior.
     */
    public goBackward() {
        this.location.back();
    }

    /**
	 * Mostrar y ocultar el Loader
	 */
    public showLoader() {
        this._load.showIn();
    }
    public hideLoader() {
        this._load.hide();
    }

    /**
     * Redireccionar paginas
     * @param {string} url 
     */
    public openUrl(url: string) {
        this.router.navigate([url]);
    }
    
    public round2Decimals(num) {
        return Number(num).toFixed(2);
    }
}