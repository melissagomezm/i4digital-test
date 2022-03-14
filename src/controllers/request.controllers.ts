import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { Response } from 'src/models/Response';
import { RequestService } from 'src/services/request.service';

@Controller('request')
export class RequestController {
    
    constructor(private readonly requestService: RequestService) {}

    @Get('exportToBase64')
    async exportToBase64(): Promise<string> {
        const data =  await this.requestService.getAllRequest();
        const base64 = function(string) {  return Buffer.from(string).toString('base64') }
        return base64(JSON.stringify(data.body));
    }


    @Get()
    getAllRequest(): Promise<Response<object>> {
        return this.requestService.getAllRequest();
    }


    @Put(':id')
    putRequestId(@Param() {id},@Body() body): Promise<Response<object>> {
        return this.requestService.putRequestId(id, body);
    }

    @Delete(':id')
    deleteRequestId(@Param() {id}): Promise<Response<object>> {
        return this.requestService.deleteRequestId(id);
    }


}