class AnalogMessage implements IAnalogMessage {
  dataVersion: number;
  gateId: string;
  seq_nr: number;
  timeStamp: string;
  type: string;
  value: number[];

  constructor(
    dataVersion?: number,
    gateId?: string,
    seq_nr?: number,
    type?: string,
    value?: number[],
  ) {
    this.dataVersion = dataVersion ?? 1;
    this.gateId = gateId ?? 'jaap5';
    this.seq_nr = seq_nr ?? 383569;
    this.timeStamp = new Date().toString();
    this.type = type ?? 'busio';
    this.value = value ?? [8, 0, 209, 0, 0, 0, 144, 19, 0, 0, 0];
  }
}
