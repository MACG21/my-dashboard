export interface Usuario {
  id: number;
  cui: number;
  nombre: string;
  direccion: string;
  correo: string;
  contrasena: string;
}
export class Usuario{
  constructor(
    public id: number,
    public cui: number,
    public nombre: string,
    public direccion: string,
    public correo: string,
    public contrasena: string
  ){}
}
