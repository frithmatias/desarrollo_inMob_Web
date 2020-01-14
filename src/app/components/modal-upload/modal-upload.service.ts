import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {
  public tipo: string;
  public id: string;
  public oculto = 'oculto';
  public notificacion = new EventEmitter<any>();

  constructor() {
    // console.log('Modal upload listo');
  }

  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }

  // tipo: 'usuarios', 'avisos', etc.
  mostrarModal(tipo: string, id: string) {
    this.oculto = '';
    this.id = id;
    this.tipo = tipo;
  }
}
