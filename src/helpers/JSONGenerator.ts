import { MessageModel } from '../model/MessageModel';
import { DataType } from '../model/DataType';
import { DataGenerator } from './DataGenerator';

export async function JSONGenerator(
  datatype: DataType,
  increment: number,
): Promise<MessageModel> {
  const messageModel = new MessageModel();
  messageModel.data_version = 1;
  messageModel.timestamp = getTime(increment);
  messageModel.gateid = 'Axel 1';
  messageModel.type = datatype;
  messageModel.value = await DataGenerator(datatype);
  messageModel.seq_number = 383569;
  return messageModel;
}

function getTime(i: number): string {
  const time: Date = new Date();
  time.setTime(time.getTime() + i * 20000);
  return time.toISOString();
}
