import {
  Body,
  Controller,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Analog')
@Controller('analog')
export class AnalogController {
  @Post('success')
  async postSuccess(): Promise<NotImplementedException> {
    // await send request
    // return response (error or no)
    return new NotImplementedException();
  }

  @Post('setup')
  async postSetup(): Promise<NotImplementedException> {
    // repeat every second 20 times
    // await send request
    // return response (error or no)
    return new NotImplementedException();
  }
}
