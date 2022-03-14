import { Injectable } from '@nestjs/common';
import { Response } from 'src/models/Response';

@Injectable()
export class AppService {
  getHello(): Response<string> {
    const response = new Response<string>();
    response.status = true;
    response.body = 'La Api esta funcionando';
    return response;
  }
}
