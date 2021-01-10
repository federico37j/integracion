import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Telefono } from './telefono.entity';

@Injectable()
export class TelefonoService {

    constructor(
        @InjectRepository(Telefono) private readonly telefonoRepository: Repository<Telefono>,
    ){}

    public async getClientes(): Promise<Telefono[]>{
        console.log("Get All telefono");
        try {
            const result= await this.telefonoRepository.find({
                relations: ["cliente"]
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

    
}