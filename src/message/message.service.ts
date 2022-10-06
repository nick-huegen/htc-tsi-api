import { Injectable } from '@nestjs/common';
import { MessageModel } from "../model/MessageModel";
import { JSONGenerator } from "../helpers/JSONGenerator";

@Injectable()
export class MessageService {
  PushMessage(dataType: string): MessageModel {
    const newDataType = JSONGenerator(dataType);
    return newDataType;
  }
}
