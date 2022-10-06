import { Controller, NotImplementedException, Param, Post } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Message')
@Controller('message')
export class MessageController {
  @Post('/:message')
  async postBusIO(@Param('message') message): Promise<NotImplementedException> {
    console.log(message);
    return new NotImplementedException();
  }
}
