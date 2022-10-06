import { Injectable } from '@nestjs/common';
import { MessageModel } from '../model/MessageModel';
import { JSONGenerator } from '../helpers/JSONGenerator';

@Injectable()
export class MessageService {
  async PushMessage(dataType: string): Promise<Array<MessageModel>> {
    const messageList: Array<MessageModel> = [];
    for (let i = 0; i < 10; i++) {
      const newDataType: MessageModel = await JSONGenerator(dataType);
      messageList.push(newDataType);
    }
    return messageList;
  }
}
