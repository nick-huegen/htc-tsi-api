import {
  Controller,
  NotImplementedException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageModel } from '../model/MessageModel';
import { MessageService } from './message.service';
import { DataType } from '../model/DataType';

@ApiTags('Message')
@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('/:message')
  async postMessage(@Param('message') message): Promise<Array<MessageModel>> {
    const dataType =
      DataType[
        Object.keys(DataType).find((type) => DataType[type] === message)
      ];
    const messageModel = this.messageService.PushMessage(dataType);
    return messageModel;
  }
}
