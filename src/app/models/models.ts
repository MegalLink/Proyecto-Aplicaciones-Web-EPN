export interface ProductoI{
id:string;
categoria:string
nombre:string;
photoUrl:string;
precio:number;
descripcion:string;
ingredientes?:string;

}

export interface PedidoI{
    id?:string;
    productos:ProductoI[];
    total:number;
    user_id;
    estado:boolean;

}

export interface UsuarioI{
    user_id:string;
    nombre:string;
    apellido:string;
    telefono:number;
    correo:string;
    direccion:string;
    admin?:string;
    key?:string;

}