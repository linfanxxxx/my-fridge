import { Module } from '@nestjs/common';
import { FridgeService } from './fridge.service';
import { FridgeController } from './fridge.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fridge } from './entities/fridge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fridge])],
  controllers: [FridgeController],
  providers: [FridgeService],
})
export class FridgeModule {}
