import { Injectable } from '@angular/core';
import { Aviso, Avisos } from 'src/app/models/aviso.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class AvisosService {

	avisos: Aviso[] = [];
	avisostotal = 1;
	actualPage = 0;

	constructor(
		private http: HttpClient,
		private router: Router,
		private snackBar: MatSnackBar,
	) {
		// this.cargarAvisos(0);

		if (localStorage.getItem('filtros')) {
			const filtros = JSON.parse(localStorage.getItem('filtros'));
			this.obtenerAvisos(filtros).then((msg) => {
				console.log(msg);
			});
		}


	}
	// Obtiene avisos según criterios de busqueda (inicio)

	obtenerAvisos(filtros: any) {
		return new Promise((resolve, reject) => {
			// Una vez que ya tengo los objetos JS armo una cadena string con los IDs de las operaciones

			if (filtros.localidad.length === 0 || filtros.tipoinmueble.length === 0 && filtros.tipooperacion.length === 0) {
				reject('Faltan datos para la busqueda.');
				return;
			}
			let operaciones: string; // venta-compra-alquiler
			filtros.tipooperacion.forEach(operacion => {
				if (operaciones) {
					operaciones = operaciones + '-' + operacion;
				} else {
					operaciones = operacion;
				}
			});

			// INMUEBLES
			let inmuebles: string;
			filtros.tipoinmueble.forEach(inmueble => {
				if (inmuebles) {
					inmuebles = inmuebles + '-' + inmueble;
				} else {
					inmuebles = inmueble;

				}
			});

			// LOCALIDADES
			let localidades: string;
			filtros.localidad.forEach(localidad => {
				if (localidades) {
					localidades = localidades + '-' + localidad;
				} else {
					localidades = localidad;
				}
			});

			const url = `${URL_SERVICIOS}/inicio/avisos/${operaciones}/${inmuebles}/${localidades}/0`;
			this.http.get(url).subscribe((data: Avisos) => {
				if (data.ok && data.avisos.length > 0) {
					// si se encuentran avisos se lo paso al servicio de avisos. Si yo entro
					// a la pagina avisos sin pasar por inicio, me va a levantar TODOS los avisos activos.
					this.avisos = data.avisos;
					const msg = `Se obtuvieron ${data.avisos.length} avisos`;
					resolve(msg);
				} else {
					this.avisos = [];
					reject('No se obtuvieron resultados.');
				}
			},
				(err) => {
					this.avisos = [];
					reject(err);
				}
			);
		});
	}
}

	// cargarAvisos(pagina: number) {
	// 	// Sola trae las proiedades activas.
	// 	if (this.actualPage * 20 < this.avisostotal) { // solo traigo mas, si quedan mas para mostrar.
	// 		let url = URL_SERVICIOS;
	// 		url += '/avisos';
	// 		url += '?pagina=' + pagina;
	// 		this.http.get(url).subscribe((data: Avisos) => {
	// 			this.avisos = data.avisos;
	// 			this.avisostotal = data.total;
	// 		});
	// 	}
	// 	this.actualPage++;
	// }
