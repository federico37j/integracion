import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from 'src/factura/factura.entity';
import { ClienteController } from './cliente.controller';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cliente,
      Factura
    ])
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
