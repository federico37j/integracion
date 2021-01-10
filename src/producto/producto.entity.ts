import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('E01_PRODUCTO')
export class Producto {

    @PrimaryGeneratedColumn()
    private codigo_producto: number;

    @Column()
    private marca: string;

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string) {
        this.marca = marca;
    }

    @Column()
    private nombre: string;

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }


    @Column()
    private descripcion: string;


    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    @Column()
    private precio: number;

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    @Column()
    private stock: number;

    public getStock(): number {
        return this.stock;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }


    public constructor(marca?: string, nombre?: string, descripcion?: string, precio?: number, stock?: number) {
        this.marca = marca;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }

    public getCodigoProducto(): number {
        return this.codigo_producto;
    }

    public setCodigoProducto(codigo_producto: number) {
        this.codigo_producto = codigo_producto;
    }

}  
