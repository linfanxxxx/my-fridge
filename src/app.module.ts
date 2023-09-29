import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FridgeModule } from './fridge/fridge.module';
import { Fridge } from './fridge/entities/fridge.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'database_zyf',
      entities: [Fridge],
      synchronize: true,
    }),
    FridgeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
