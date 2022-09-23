import { Controller, NotImplementedException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BusIO')
@Controller('busio')
export class BusioController {
  @Post('success')
  async postSuccess(): Promise<NotImplementedException> {
    // await send request
    // return response (error or no)
    return new NotImplementedException();
  }

  @Post('weird value')
  async postFail(): Promise<NotImplementedException> {
    // await send request
    // return response (error or no)
    return new NotImplementedException();
  }
}
