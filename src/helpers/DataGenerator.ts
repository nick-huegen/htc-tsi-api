import { DataType } from '../model/DataType';

const ANALOG_MIN = 0;
const ANALOG_MAX = 255;

export async function DataGenerator(
  datatype: DataType,
  seed = 0,
): Promise<string[] | number[] | number> {
  switch (datatype) {
    case DataType.analog:
      const analog_values = [];
      for (let i = 0; i < 4; i++) {
        analog_values.push(
          Math.round(
            (Math.random() * (ANALOG_MAX - ANALOG_MIN) + ANALOG_MIN) * 100,
          ) / 100,
        );
      }
      return analog_values;
    case DataType.busio:
      const busio_values = [];
      for (let i = 0; i < 88; i++) {
        busio_values.push(Math.round(Math.random()));
      }
      return busio_values;
    case DataType.cyclecounter:
      return 69955 + seed;
    case DataType.display:
      return ['2UF_', '_Eu_', '? 30', '2UF`'];
  }
}
