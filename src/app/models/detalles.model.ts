// Generated by https://quicktype.io

export class DetallesResp {
  constructor(
	public ok: boolean,
	public mensaje: string,
	public detalles: Detalles[],
	public total: number
  ) { }
}

export class Detalles {
  constructor(
	public superficietotal?: number,
	public superficieconstruible?: number,
	public zonificacion?: string,
	public longitudfondo?: number,
	public longitudfrente?: number,
	public tipoterreno?: string,
	public fot?: string,
	public fos?: string,
	public tipopendiente?: string,
	public tipovista?: string,
	public estado?: string,
	public propiedadocupada?: boolean,
	public fondoirregular?: boolean,
	public frenteirregular?: boolean,
	public demolicion?: boolean,
	public lateralizquierdoirregular?: boolean,
	public lateralderechoirregular?: boolean,
	public instalaciones?: string[],
	public servicios?: string[],
	// el usuario se adjunta en el controlador de avisos en el backend,
	// lo obtiene el middleware auth cuando verifica el token
	// public inmobiliaria?: Inmobiliaria,
	public _id?: string,
	public __v?: number
  ) { }
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
