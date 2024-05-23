
export interface PrecioProyectos{
  proyectoId:string,
  precio:number,
  fechaCreacion:string
}

export interface Insumo {
    id: string;
    fechaCreacion: string;
    clave: string;
    descripcion: string;
    unidad: string;
    categoria: string;
    isTarea?:boolean
    precio: number|string;

  }


  export interface InsumosExp extends Insumo {
    cantidadTotal: number;
    cantidadInsumo: number;
    cantidadConcepto: number | undefined;
    conceptoId: string;
  }


