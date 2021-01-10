import { Module } from '@nestjs/common';
import { TelefonoController } from './telefono.controller';
import { TelefonoService } from './telefono.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefono } from './telefono.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Telefono
    ])
  ],
  controllers: [TelefonoController],
  providers: [TelefonoService]
})

export class TelefonoModule {}
