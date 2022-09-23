import { Module } from '@nestjs/common';
import { AnalogController } from './analog.controller';
import { AnalogService } from './analog.service';

@Module({
  controllers: [AnalogController],
  providers: [AnalogService]
})
export class AnalogModule {}
