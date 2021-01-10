import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClienteDTO } from './cliente.dto';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {

    public constructor(private readonly clienteService: ClienteService) { }

    @Get("get-all")
    public getAllProductos(): Promise<Cliente[]> {
        return this.clienteService.getClientes();
    }

    @Get(":id")
    public getClienteById(@Param("id") id: number): Promise<Cliente> {
        return this.clienteService.getById(id);
    }
    
    @Get("get-cliente/:like")
    public getClienteByLike(@Param("like") like: string): Promise<Cliente[]> {
        return this.clienteService.getClienteByLike(like);
    }

    @Post("new-cliente")
    public createArticle(@Body() clienteDto: ClienteDTO): Promise<Cliente> {
        return this.clienteService.addProduct(clienteDto);
    }

    @Put(":id")
    public updateProducto(@Body() clienteDto: ClienteDTO, @Param('id') id: number): Promise<Cliente>{
        return this.clienteService.updateCliente(clienteDto,id);
    }

    @Delete(":id")
    public deleteProducto(@Param('id') id: number){
        return this.clienteService.deleteCliente(id);
    }
}
