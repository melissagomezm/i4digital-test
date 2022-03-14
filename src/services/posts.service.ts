import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Response } from 'src/models/Response';

@Injectable()
export class PostsService {

    constructor(private httpService: HttpService) {}

    async getAllPosts(): Promise<Response<object>> {
        const posts =  await this.httpService.get('https://jsonplaceholder.typicode.com/posts').toPromise();
        const response = new Response<object>();
        response.status = true;
        response.body = posts.data;
        return response;
    }
    
}