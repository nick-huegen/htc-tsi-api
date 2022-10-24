import { MessageModel } from '../model/MessageModel';
import { DataType } from '../model/DataType';

export async function JSONGenerator(
  datatype: string,
  increment: number,
): Promise<MessageModel> {
  const messageModel = new MessageModel();
  messageModel.data_version = 1;
  messageModel.timestamp = setTime(increment);
  messageModel.gateid = 'jaap5';
  messageModel.type = DataType[datatype];
  switch (datatype) {
    case 'analog': {
      messageModel.value = [17, -112, 47, 25];
      break;
    }
    case 'display': {
      messageModel.value = ['2UF_', '_Eu_', '? 30', '2UF`'];
      break;
    }
    case 'cyclecounter': {
      messageModel.value = 69955 + increment;
      break;
    }
    case 'buisio': {
      messageModel.value = [8, 0, 209, 0, 0, 0, 144, 19, 0, 0, 0];
      break;
    }
  }
  messageModel.seq_number = 383569;
  return messageModel;
}

function setTime(i: number): string {
  const time: Date = new Date();
  time.setTime(time.getTime() + i * 20000);
  return time.toISOString();
}
