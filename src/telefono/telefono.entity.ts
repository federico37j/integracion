import { Cliente } from 'src/cliente/cliente.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('E01_TELEFONO')
export class Telefono {

    @PrimaryColumn()
    private codigo_area: number;

    @PrimaryColumn()
    private nro_telefono: number;

    @Column()
    private tipo: string;

    @OneToOne(type => Cliente)
    @JoinColumn({ name: 'nro_cliente' })
    public cliente: Cliente;


    public getCodigo_area(): number {
        return this.codigo_area;
    }

    public setCodigo_area(codigo_area: number): void {
        this.codigo_area = codigo_area;
    }

    public getNro_telefono(): number {
        return this.nro_telefono;
    }

    public setNro_telefono(nro_telefono: number): void {
        this.nro_telefono = nro_telefono;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

}