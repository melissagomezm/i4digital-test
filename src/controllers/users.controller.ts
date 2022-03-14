import { Controller, Get, Param } from '@nestjs/common';
import { Response } from 'src/models/Response';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
    
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers(): Promise<Response<object>> {
        return this.userService.getAllUsers();
    }

    
    @Get('photos/:userId')
    getPhotosByUserId(@Param() {userId}): Promise<Response<object>> {
        return this.userService.getPhotosByUserId(userId);
    }

}