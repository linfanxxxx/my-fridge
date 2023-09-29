import { Injectable } from '@nestjs/common';
import { CreateFridgeDto } from './dto/create-fridge.dto';
import { UpdateFridgeDto } from './dto/update-fridge.dto';
import { Fridge } from './entities/fridge.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class FridgeService {
  constructor(
    @InjectRepository(Fridge) private fridgesRepository: Repository<Fridge>,
  ) {}

  create(createFridgeDto: CreateFridgeDto) {
    return 'This action adds a new fridge';
  }

  findAll() {
    return this.fridgesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fridge`;
  }

  update(id: number, updateFridgeDto: UpdateFridgeDto) {
    return `This action updates a #${id} fridge`;
  }

  remove(id: number) {
    return `This action removes a #${id} fridge`;
  }
}
