import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

/**
 * Controlles
 */
import { AppController } from '../controllers/app.controller';
import { UsersController } from 'src/controllers/users.controller';

/**
 * Services
 */
import { AppService } from '../services/app.service';
import { UsersService } from 'src/services/users.service';
import { PostsController } from 'src/controllers/posts.controllers';
import { PostsService } from 'src/services/posts.service';
import { RequestController } from 'src/controllers/request.controllers';
import { RequestService } from 'src/services/request.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [
    AppController, 
    UsersController,
    PostsController,
    RequestController
  ],
  providers: [
    AppService,
    UsersService,
    PostsService,
    RequestService
  ],
})
export class AppModule {}
