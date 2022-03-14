import { HttpService } from '@nestjs/axios';
import { Injectable, Req } from '@nestjs/common';
import { Response } from 'src/models/Response';

@Injectable()
export class UsersService {

    constructor(private httpService: HttpService) {}

    async getAllUsers(): Promise<Response<object>> {

        const users =  await this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise();

        const response = new Response<object>();
        response.status = true;
        response.body = users.data;
        
        return response;
    }


    async getPhotosByUserId(userId): Promise<Response<object>> {
        let albumsByUser =  (await this.httpService.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).toPromise()).data;
        for(let i = 0; i < albumsByUser.length; i++) {
            const album = albumsByUser[i];
            const photos = (await this.httpService.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`).toPromise()).data;
            albumsByUser[i].photos = photos;
        }

        const response = new Response<object>();
        response.body = albumsByUser;
        return response;
    }
}