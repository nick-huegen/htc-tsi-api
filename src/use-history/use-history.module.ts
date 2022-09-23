import { Module } from '@nestjs/common';
import { UseHistoryController } from './use-history.controller';
import { UseHistoryService } from './use-history.service';

@Module({
  controllers: [UseHistoryController],
  providers: [UseHistoryService],
})
export class UseHistoryModule {}
