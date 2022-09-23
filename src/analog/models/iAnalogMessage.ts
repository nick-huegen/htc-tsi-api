interface IAnalogMessage {
  dataVersion: number;
  timeStamp: string;
  gateId: string;
  type: string;
  value: number[];
  seq_nr: number;
}
