export interface Zapato{
    id: number,
    nombre: string,
    descripcion: string,
    precio: string,
    descuento: DoubleRange,
    imagen: string,
    arregloImgs: string[];
    cantidad: number,
    descipcionGrande: string,
    detalles: string[],
    imagenInferior: string[]
}