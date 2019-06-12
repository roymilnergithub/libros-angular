import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpinnerLoaderService {

    private _selector: string = 'preloader';
    private _element: HTMLElement;

    constructor() {
        this._element = document.getElementById(this._selector);
    }

    public show(): void {
        this._element.style['display'] = 'block';
    }

    public showIn(): void {
        this._element.style['display'] = 'flex';
    }

    public hide(delay: number = 0): void {
        setTimeout(() => {
            this._element.style['display'] = 'none';
        }, delay);
    }
}