import { DataType } from './DataType';
export class MessageModel {
  data_version: number;
  timestamp: string;
  gateid: string;
  type: DataType;
  value: string[] | number[] | number;
  seq_number: number;
}
