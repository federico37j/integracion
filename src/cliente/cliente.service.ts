import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ClienteDTO } from './cliente.dto';
import { Factura } from './../factura/factura.entity';



@Injectable()
export class ClienteService {

    constructor(
        @InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>,
        @InjectRepository(Factura) private readonly facturaRepository: Repository<Factura>
    ) { }

    public async getClientes(): Promise<Cliente[]> {
        console.log("Get All clientes");
        try {
            const result = await this.clienteRepository.find({
                relations: ["facturas"]
            });
            console.log(result);
            return result

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async getAll(): Promise<Cliente[]> {
        console.log("getAllRaw de clientes")

        try {
            const clientes: Cliente[] = await this.clienteRepository.find();
            return clientes;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async getById(id: number): Promise<Cliente> {
        try {
            const cliente: Cliente = await this.clienteRepository.findOne(id);
            return cliente;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async addProduct(newCliente: ClienteDTO): Promise<Cliente> {
        try {
            const clienteCreado: Cliente = await this.clienteRepository.save(new Cliente(
                newCliente.nombre,
                newCliente.apellido,
                newCliente.direccion,
                newCliente.activo)
            );
            if (clienteCreado) {
                return clienteCreado;
            } else {
                throw new HttpException('No se pudo crear un cliente', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async updateCliente(newCliente: ClienteDTO, id: number): Promise<Cliente> {
        let cliente: Cliente = await this.getById(id);
        try {
            if (cliente) {
                cliente.setNombre(newCliente.nombre);
                cliente.setApellido(newCliente.apellido);
                cliente.setDireccion(newCliente.direccion);
                cliente.setActivo(newCliente.activo);
                const clienteUpdated: Cliente = await this.clienteRepository.save(cliente);

                if (clienteUpdated) {
                    return clienteUpdated;
                } else {
                    throw new HttpException('No se pudo crear un cliente', HttpStatus.NOT_MODIFIED);
                }
            } else {
                throw new HttpException('No se pudo crear un cliente', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    public async deleteCliente(id: number) {
        try {
            let cliente: Cliente = await this.getById(id);
            if (cliente) {
                let deleteResult = await this.clienteRepository.delete(id);
                return deleteResult;
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    async getClienteByLike(like: string): Promise<Cliente[]> {
        let response: Cliente[] = await this.clienteRepository.find({
            where: [{
                "nombre": Like(`%${like}%`)
            }]
        })
        return response;
    }

}
