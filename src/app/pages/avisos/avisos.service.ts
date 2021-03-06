import { Injectable } from '@angular/core';
import { Aviso, Avisos } from 'src/app/models/aviso.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AvisosService {

	avisos: Aviso[];

	constructor(
		private http: HttpClient
	) { }

	buscarAviso(termino: string) {
		const url = URL_SERVICIOS + '/buscar/avisos/' + termino;
		return this.http.get(url);
	}

	// Obtiene los avisos para TI y TO
	obtenerAvisos(filtros: Filtros) {
		return new Promise((resolve, reject) => {
			// Una vez que ya tengo los objetos JS armo una cadena string con los IDs de las operaciones

			let operaciones: string; // _id.venta-_id.compra-_id.alquiler
			let inmuebles: string;
			let localidades: string;

			filtros.tipooperacion.forEach((operacion: string) => operaciones ? operaciones += '-' + operacion : operaciones = operacion);
			filtros.tipoinmueble.forEach((inmueble: string) => inmuebles ? inmuebles += '-' + inmueble : inmuebles = inmueble);
			filtros.localidad.forEach((localidad: string) => localidades ? localidades += '-' + localidad : localidades = localidad);

			if ((operaciones === 'undefined') || (inmuebles === 'undefined') || (localidades === 'undefined')) { reject('Flatan datos por favor verifique.'); }
			const url = `${URL_SERVICIOS}/avisos/${operaciones}/${inmuebles}/${localidades}/0`;
			this.http.get(url)

				.subscribe((data: Avisos) => {
					if (data.ok && data.avisos.length > 0) {
						// si se encuentran avisos se lo paso al servicio de avisos. Si yo entro
						// a la pagina avisos sin pasar por inicio, me va a levantar TODOS los avisos activos.
						resolve(data);
					} else {
						reject('No se obtuvieron resultados.');
					}
				},
					(err) => {
						reject(err);
					}
				);


		});
	}

}

interface Filtros {
	tipooperacion: string[];
	tipoinmueble: string[];
	localidad: string[];
}
