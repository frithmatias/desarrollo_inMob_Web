import { Detalles } from './detalle.model';

// Generated by https://quicktype.io

export class Propiedades {
	constructor(
		public ok: boolean,
		public mensaje: string,
		public propiedades: Propiedad[],
		public total: number
	) { }
}

export class Propiedad {
	constructor(
		public calle?: string,
		public altura?: number,
		public piso?: number,
		public depto?: string,
		public tipoinmueble?: Inmueble,
		public tipounidad?: Unidad,
		public tipooperacion?: Operacion,
		public titulo?: string,
		public descripcion?: string,
		public precio?: number,
		public moneda?: string,
		public nopublicarprecio?: boolean,
		public aptocredito?: boolean,
		public provincia?: Provincia,
		public departamento?: Departamento,
		public localidad?: Localidad,
		public coords?: Coords,
		public codigopostal?: string,
		public usuario?: Usuario,
		public detalles?: Detalles,
		public activo?: boolean,
		// el usuario se adjunta en el controlador de propiedades en el backend,
		// lo obtiene el middleware auth cuando verifica el token
		// public inmobiliaria?: Inmobiliaria,
		public imgs?: string[],
		public _id?: string,
		public __v?: number
	) {
		this.imgs = [];
	}
}
interface Localidad {
	nombre: string;
	id: string;
	_id: string;
}
interface Departamento {
	nombre: string;
	id: string;
}
interface Provincia {
	nombre: string;
	id: string;
}
interface Operacion {
	nombre: string;
	_id: string;
}
interface Inmueble {
	nombre: string;
	_id: string;
}
interface Unidad {
	nombre: string;
	_id: string;
}
interface Coords {
	lat: string;
	lng: string;
}
interface Inmobiliaria {
	_id: string;
	nombre: string;
	usuario: string;
	__v: number;
	img: string;
}

interface Usuario {
	img: string;
	_id: string;
	email: string;
	nombre: string;
}
