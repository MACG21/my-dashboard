export interface Cliente {
  nit: number;
  cui: number;
  nombre: string;
  direccion: string;
  correo: string;
  notas: string;
}
export class Cliente{
  constructor(
    public nit: number,
    public cui: number,
    public nombre: string,
    public direccion: string,
    public correo: string,
    public notas: string
  ){}
}
