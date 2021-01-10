export class facturaDTO {
    readonly fecha: Date;
    readonly total_sin_iva: number;
    readonly iva: number;
    readonly total_con_iva: number;
    readonly nro_cliente: number;
}