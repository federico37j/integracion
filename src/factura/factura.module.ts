import { Module } from '@nestjs/common';
import { FacturaController } from './factura.controller';
import { FacturaService } from './factura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './factura.entity';
import { Cliente } from 'src/cliente/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Factura,
      Cliente
    ])
  ],
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}
