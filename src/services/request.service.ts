import { Injectable } from '@nestjs/common';
import { Response } from 'src/models/Response';
import RequestLogSchema from 'src/schemas/RequestLogSchema';

@Injectable()
export class RequestService {

    async getAllRequest(): Promise<Response<object>> {
        const response = new Response<object>();
        response.body = await RequestLogSchema.find();
        return response;
    }

    async putRequestId(id, body): Promise<Response<object>> {
        const oldData = await RequestLogSchema.findByIdAndUpdate(id, body).exec();
        const response = new Response<object>();
        response.body = Object.assign(oldData, body);
        return response;
    }

    async deleteRequestId(id): Promise<Response<object>> {
        const oldData = await RequestLogSchema.findByIdAndDelete(id).exec();
        const response = new Response<object>();
        response.body = oldData;
        return response;
    }

}
