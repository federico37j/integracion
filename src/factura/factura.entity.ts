import { Cliente } from 'src/cliente/cliente.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FACTURA')
export class Factura {

    @PrimaryGeneratedColumn()
    private nro_factura: number;

    @Column()
    private fecha: Date;

    @Column()
    private total_sin_iva: number;

    @Column()
    private iva: number;

    @Column()
    private total_con_iva: number;

    @Column()
    private nro_cliente: number;

    @ManyToOne ((type) => Cliente, cliente => cliente.facturas)
    @JoinColumn({name: 'nro_cliente'})
    public cliente: Cliente;
    
    public constructor(fecha?: Date, total_sin_iva?: number, iva?: number, total_con_iva?: number, nro_cliente?: number) {
        this.fecha = fecha;
        this.total_sin_iva = total_sin_iva;
        this.iva = iva;
        this.total_con_iva = total_con_iva;
        this.nro_cliente = nro_cliente;
    }

    public getNroFactura(): number {
        return this.nro_factura;
    }

    public setNroFactura(nro_factura: number) {
        this.nro_factura = nro_factura;
    }

    public getFecha(): Date {
        return this.fecha;
    }

    public setFecha(fecha: Date) {
        this.fecha = fecha;
    }

    public getTotalSinIva(): number {
        return this.total_sin_iva;
    }

    public setTotalSinIva(total_sin_iva: number) {
        this.total_sin_iva = total_sin_iva;
    }

    public getTotalConIva(): number {
        return this.total_con_iva;
    }

    public setTotalConIva(total_con_iva: number) {
        this.total_con_iva = total_con_iva;
    }
}  
