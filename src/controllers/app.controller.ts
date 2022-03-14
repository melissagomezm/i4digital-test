import { Controller, Get } from '@nestjs/common';
import { Response } from 'src/models/Response';
import RequestLogSchema from 'src/schemas/RequestLogSchema';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Response<string> {
    return this.appService.getHello();
  }

}
