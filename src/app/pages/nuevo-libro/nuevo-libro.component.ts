import { Component, OnInit } from '@angular/core';
import { Global } from './../../common/global/global';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

// servicios
import { RestService } from './rest.service';

@Component({
    selector: 'app-nuevo-libro',
    templateUrl: './nuevo-libro.component.html'
})
export class NuevoLibroComponent implements OnInit {

    public title: string = '';
    public editorialList: any = [];
    public autoreslList: any = [];
    public libroForm: FormGroup;
    public nombreArchivo: any;
    public file: File;
    public direcccionFile: any;
    public formData: FormData = new FormData();

    constructor(
        public _global: Global,
        protected restService: RestService,
        private formBuilder: FormBuilder,
    ) {
        this.title = this._global.TITLE_NUEVO_LIBRO;
    }

    ngOnInit() {
        this.obtenerEditoriales();
        this.obtenerAutores();
        this.createForm();
        this.initLibroForm();
    }

    obtenerEditoriales() {
        this.restService.getEditoriales()
            .subscribe((data) => {
                this.editorialList = data;
                console.log("editorialList=", this.editorialList);
            },
                (error) => {
                    console.error(error);
                }
            );
    }

    obtenerAutores() {
        this.restService.getAutores()
            .subscribe((data) => {
                this.autoreslList = data;
                console.log("autoresList=", this.autoreslList);
            },
                (error) => {
                    console.error(error);
                }
            );
    }

    createForm() {
        this.libroForm = this.formBuilder.group({
            codigo_producto_servicio: new FormControl({ value: '' }),
            titulo: new FormControl({ value: '' }),
            autor_id: new FormControl({ value: '' }),
            isbn: new FormControl({ value: '' }),
            editorial_id: new FormControl({ value: '' }),
            descripcion: new FormControl({ value: '' }),
            cantidad: new FormControl({ value: '0.00' }),
            imagen: new FormControl(''),
            precio_original: new FormControl({ value: '0.00' }),
            precio_compra: new FormControl({ value: '0.00' }),
            precio_oferta: new FormControl({ value: '0.00' }),
            estado_producto_servicio: new FormControl(this._global.ESTADO.ACTIVO)
        });
    }

    initLibroForm() {
        this.libroForm.controls['codigo_producto_servicio'].setValue('');
        this.libroForm.controls['titulo'].setValue('');
        this.libroForm.controls['autor_id'].setValue('1');
        this.libroForm.controls['isbn'].setValue('');
        this.libroForm.controls['editorial_id'].setValue('1');
        this.libroForm.controls['descripcion'].setValue('');
        this.libroForm.controls['cantidad'].setValue('');
        this.libroForm.controls['imagen'].setValue('');
        this.libroForm.controls['precio_original'].setValue('');
        this.libroForm.controls['precio_compra'].setValue('');
        this.libroForm.controls['precio_oferta'].setValue('');
    }

    public setForm(item) {
        let preview = document.getElementById("imgFile") as HTMLImageElement;
        preview.src = item.imagen;
        if (item.imagen == null) {
            preview.src = '';
            this.nombreArchivo = '';
        } else {
            preview.src = item.imagen;
        }

        item.imagen = "";

        this.libroForm.patchValue(item);
    }

    public selectArchivo(event) {
        //this._util.showLoader();
        let reader = new FileReader();
        let flag = false;
        let msg = { status: "error", message: " " };
        let preview = document.getElementById("imgFile") as HTMLImageElement;
        let form = this.libroForm.value;
        this.file = event.srcElement.files[0];
        if (this.file == null) {
            this.libroForm.controls['imagen'].setValue('');
            this.file = null;
        } else {
            if (this.file.type.includes('image', 0) && (this.file.name.includes('.png') || this.file.name.includes('.jpg') ||
                this.file.name.includes('.jpeg'))) {
                if (this._global.MAX_TAMANO_IMAGE >= this.file.size) {
                    if (this.file) {
                        form['imagen'] = this.file.name;
                        this.nombreArchivo = this.file.name;
                        reader.onloadend = function () {
                            preview.src = reader.result.toString();
                        }
                        this.direcccionFile = preview.src;
                        reader.readAsDataURL(this.file);
                    };
                } else {
                    form['imagen'] = '';
                    msg.message = "El tamaño del Archivo excede el límite de 2MB.";
                    //this._util.alerts(msg);
                    console.log('alerts_msg: ', msg)
                }
            } else {
                form['imagen'] = '';
                msg.message = "El archivo seleccionado no es una imagen o no tiene las extensiones permitidas (png,jpg).";
                console.log('alerts_msg: ', msg)
            }
            if (flag) {
                console.log('alerts_msg: ', msg)
            }
        }
        //this._util.hideLoader();
    }

    public onSubmit() {
        let libro = this.libroForm.value;
        this.setFormData(libro);
        this.saveLibro();
    }

    public saveLibro() {
        this.restService.registrarNuevoLibro(this.formData).subscribe(
            data => {
                if (data) {
                    console.log('Libro guardado exitosamente')
                    console.log('Data = ', data)
                    let preview = document.getElementById("imgFileReturn") as HTMLImageElement;
                    preview.src = (data.imagenBase == null) ? '' : data.imagenBase;
                    // this.router.navigate(['/dashboard']);
                }
            },
            error => {
                console.log("El libro no pudo ser guardado", error)
            }
        );
    }

    public setFormData(libro) {
        this.formData.append('codigo_producto_servicio', libro.codigo_producto_servicio);
        this.formData.append('titulo', libro.titulo);
        this.formData.append('autor_id', libro.autor_id);
        this.formData.append('isbn', libro.isbn);
        this.formData.append('editorial_id', libro.editorial_id);
        this.formData.append('descripcion', libro.descripcion);
        this.formData.append('cantidad', libro.cantidad);
        this.formData.append('precio_original', libro.precio_original);
        this.formData.append('precio_compra', libro.precio_compra);
        this.formData.append('precio_oferta', libro.precio_oferta);
        this.formData.append('imagen', this.file);

    }

}
