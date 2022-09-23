import { Module } from '@nestjs/common';
import { AnalogModule } from './analog/analog.module';
import { BusioModule } from './busio/busio.module';
import { DisplayModule } from './display/display.module';
import { UseHistoryModule } from './use-history/use-history.module';
import { ConfigModule } from '@nestjs/config';
import { HamburgerController } from './hamburger/hamburger.controller';

@Module({
  imports: [
    AnalogModule,
    BusioModule,
    DisplayModule,
    UseHistoryModule,
    ConfigModule.forRoot(),
  ],
  controllers: [HamburgerController],
})
export class AppModule {}
