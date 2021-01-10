import { Producto } from './producto.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoDTO } from './producto.dto';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>
    ) { }

    // public async getAll(): Promise<any>{
    //     console.log("getAll de productos")
    //     const result = await this.productoRepository.query("select * from e01_producto");
    //     console.log("resultado: " + result);
    //     const producto = new Producto(result[0]['codigo_producto'],
    //                                     result[0]['marca'],
    //                                     result[0]['nombre'],
    //                                     result[0]['descripcion'],
    //                                     result[0]['precio'],
    //                                     result[0]['stock']);
    //     console.log("producto: " + producto);
    //     return producto;
    // }

    public async getAll(): Promise<Producto[]>{
        console.log("Get All productos");
        try {
            //Get all
            const result: Producto[] = await this.productoRepository.find();

            //Select * from e01_producto where (codigo_producto > 100 AND precio <= 200) OR (codigo_producto < 20 AND precio >= 200)
            // const result: Producto[] = await this.productoRepository.find({
            //     where:[
            //         {"codigo_producto": MoreThan(100), "precio": LessThanOrEqual(200)},
            //         {"codigo_producto": LessThan(20), "precio": MoreThanOrEqual(200)}
            //     ]
            // });
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
              }, HttpStatus.NOT_FOUND);
        }
    }

    public async getById(id): Promise<Producto> {
        try {
            const producto: Producto = await this.productoRepository.findOne(id);
            return producto;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async addProduct(newProducto: ProductoDTO): Promise<Producto> {
        try {
            const productoCreado: Producto = await this.productoRepository.save(new Producto(
                newProducto.marca,
                newProducto.nombre,
                newProducto.descripcion,
                newProducto.precio,
                newProducto.stock)
            );
            if (productoCreado.getCodigoProducto()) {
                return productoCreado;
            } else {
                throw new HttpException('No se pudo crear el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async updateProducto(newProducto: ProductoDTO, id: number): Promise<Producto> {
        let producto: Producto = await this.getById(id);
        try {
            if (producto) {
                producto.setMarca(newProducto.marca);
                producto.setNombre(newProducto.nombre);
                producto.setPrecio(newProducto.precio);
                producto.setDescripcion(newProducto.descripcion);
                producto.setStock(newProducto.stock);
                const productoUpdated: Producto = await this.productoRepository.save(producto);

                if (productoUpdated) {
                    return productoUpdated;
                } else {
                    throw new HttpException('No se pudo crear el producto', HttpStatus.NOT_MODIFIED);
                }
            } else {
                throw new HttpException('No se pudo crear el producto', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async deleteProduct(id: number) {
        try {
            let producto: Producto = await this.getById(id);
            if (producto.getCodigoProducto()) {
                let deleteResult = await this.productoRepository.delete(id);
                return deleteResult;
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

}

