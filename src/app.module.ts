import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalogModule } from './analog/analog.module';
import { BusioModule } from './busio/busio.module';
import { DisplayModule } from './display/display.module';
import { UseHistoryModule } from './use-history/use-history.module';

@Module({
  imports: [AnalogModule, BusioModule, DisplayModule, UseHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
