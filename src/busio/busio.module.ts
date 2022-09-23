import { Module } from '@nestjs/common';
import { BusioController } from './busio.controller';
import { BusioService } from './busio.service';

@Module({
  controllers: [BusioController],
  providers: [BusioService],
})
export class BusioModule {}
