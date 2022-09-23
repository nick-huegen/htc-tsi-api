import { DocumentBuilder } from '@nestjs/swagger';
const swagger_config = new DocumentBuilder()
  .setTitle('HTC-TSI Transition')
  .setDescription(
    'The sends out messages to a recipient that can be configured from within the code base TODO configuration can be send with the endpoint',
  )
  .setVersion('0.1')
  .build();

export default swagger_config;
