import { MessageModel } from "../model/MessageModel";
import { DataType } from "../model/DataType";

export function JSONGenerator(datatype: string): MessageModel {
  const messageModel = new MessageModel();
  messageModel.data_version = 1;
  messageModel.timestamp = new Date().toISOString();
  messageModel.gateid = "jaap5";
  messageModel.type = DataType[datatype]
  switch (datatype) {
    case "analog": { messageModel.value = [17, -112, 47, 25]; break;}
    case "display": { messageModel.value = ["2UF_", "_Eu_", "? 30", "2UF`"]; break;}
    case "cyclecounter": { messageModel.value = 69955; break; }
    case "buisio": { messageModel.value = [8, 0, 209, 0, 0, 0, 144, 19, 0, 0, 0,]; break;}
  }
  messageModel.seq_number = 383569;
  return messageModel;
}