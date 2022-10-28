import { Injectable } from '@nestjs/common';
import { MessageModel } from '../model/MessageModel';
import { JSONGenerator } from '../helpers/JSONGenerator';
import { EventPush } from '../helpers/EventPush';
import { DataType } from '../model/DataType';

@Injectable()
export class MessageService {
  async PushMessage(dataType: DataType): Promise<Array<MessageModel>> {
    const messageList: Array<MessageModel> = [];
    for (let i = 0; i < 100; i++) {
      const newDataType: MessageModel = await JSONGenerator(dataType, i);
      messageList.push(newDataType);
    }
    try {
      await EventPush(messageList);
    } catch (e) {
      return e;
    }
    return messageList;
  }
}
