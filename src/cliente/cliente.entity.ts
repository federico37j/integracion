import { Factura } from 'src/factura/factura.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('E01_CLIENTE')
export class Cliente {

    @PrimaryGeneratedColumn()
    private nro_cliente: number;

    @Column()
    private nombre: string;

    @Column()
    private apellido: string;

    @Column()
    private direccion: string;

    @Column()
    private activo: boolean;

    @OneToMany((type) => Factura, factura => factura.cliente)
    public facturas: Factura[];

    public constructor(nombre?: string, apellido?: string, direccion?: string, activo?: boolean) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.activo = activo;
    }

    public getNroCliente(): number {
        return this.nro_cliente;
    }

    public setNroCliente(nro_cliente: number) {
        this.nro_cliente = nro_cliente;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string) {
        this.apellido = apellido;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string) {
        this.direccion = direccion;
    }

    public getActivo(): boolean {
        return this.activo;
    }

    public setActivo(activo: boolean) {
        this.activo = activo;
    }
    
}  
