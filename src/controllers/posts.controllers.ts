import { Controller, Get } from "@nestjs/common";
import { Response } from 'src/models/Response';
import { PostsService } from "src/services/posts.service";

@Controller('posts')
export class PostsController {

    constructor(private readonly postsService: PostsService) {}

    @Get()
    getAllPosts(): Promise<Response<object>> {
        return this.postsService.getAllPosts();
    }

}