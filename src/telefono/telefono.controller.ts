import { Controller, Get } from '@nestjs/common';
import { Telefono } from './telefono.entity';
import { TelefonoService } from './telefono.service';

@Controller('telefono')
export class TelefonoController {
    public constructor(private readonly telefonoService: TelefonoService) { }

    @Get("get-all")
    public getClientes(): Promise<Telefono[]>{
        return this.telefonoService.getClientes();
    }
}
